<?php

declare(strict_types=1);

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use Config\ApiSchema;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\Database\BaseBuilder;
use CodeIgniter\Database\BaseConnection;
use CodeIgniter\HTTP\ResponseInterface;

abstract class BaseTableCrudController extends BaseController
{
    use ResponseTrait;

    protected string $tableName = '';

    /**
     * @var array<string, mixed>
     */
    protected array $meta = [];

    private BaseConnection $database;

    public function __construct()
    {
        $tables = config(ApiSchema::class)->tables;
        $this->meta = $tables[$this->tableName] ?? [];
        $this->database = db_connect();
    }

    public function index(): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        return $this->respond($this->builder()->get()->getResultArray());
    }

    public function show(int $id): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if ($this->isComposite()) {
            return $this->failValidationErrors('Use the composite-key endpoint for this table.');
        }

        $row = $this->builder()->where($this->meta['primaryKey'], $id)->get()->getRowArray();
        if ($row === null) {
            return $this->failNotFound('Record not found.');
        }

        return $this->respond($row);
    }

    public function create(): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        $payload = $this->request->getJSON(true);
        if (! is_array($payload) || $payload === []) {
            $payload = $this->request->getPost();
        }

        $data = $this->filterPayload($payload, $this->meta['allowedFields']);
        if ($data === []) {
            return $this->failValidationErrors('No valid fields provided.');
        }

        $this->builder()->insert($data);

        if ($this->isComposite()) {
            return $this->respondCreated(['message' => 'Record created.']);
        }

        return $this->respondCreated([
            'message' => 'Record created.',
            'id'      => (int) $this->database->insertID(),
        ]);
    }

    public function update(int $id): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if ($this->isComposite()) {
            return $this->failValidationErrors('Use the composite-key endpoint for this table.');
        }

        $payload = $this->request->getJSON(true);
        if (! is_array($payload) || $payload === []) {
            $payload = $this->request->getRawInput();
        }

        $data = $this->filterPayload($payload, $this->meta['allowedFields']);
        if ($data === []) {
            return $this->failValidationErrors('No valid fields provided.');
        }

        $builder = $this->builder();
        $existing = $builder->where($this->meta['primaryKey'], $id)->get()->getRowArray();
        if ($existing === null) {
            return $this->failNotFound('Record not found.');
        }

        $builder->where($this->meta['primaryKey'], $id)->update($data);

        return $this->respond(['message' => 'Record updated.']);
    }

    public function delete(int $id): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if ($this->isComposite()) {
            return $this->failValidationErrors('Use the composite-key endpoint for this table.');
        }

        $builder = $this->builder();
        $existing = $builder->where($this->meta['primaryKey'], $id)->get()->getRowArray();
        if ($existing === null) {
            return $this->failNotFound('Record not found.');
        }

        $builder->where($this->meta['primaryKey'], $id)->delete();

        return $this->respondDeleted(['message' => 'Record deleted.']);
    }

    public function showComposite(int $key1, int $key2): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if (! $this->isComposite()) {
            return $this->failValidationErrors('This table uses a single primary key.');
        }

        [$firstKey, $secondKey] = $this->meta['compositeKeys'];
        $row = $this->builder()->where($firstKey, $key1)->where($secondKey, $key2)->get()->getRowArray();
        if ($row === null) {
            return $this->failNotFound('Record not found.');
        }

        return $this->respond($row);
    }

    public function updateComposite(int $key1, int $key2): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if (! $this->isComposite()) {
            return $this->failValidationErrors('This table uses a single primary key.');
        }

        $payload = $this->request->getJSON(true);
        if (! is_array($payload) || $payload === []) {
            $payload = $this->request->getRawInput();
        }

        $data = $this->filterPayload($payload, $this->meta['allowedFields']);
        if ($data === []) {
            return $this->failValidationErrors('No valid fields provided.');
        }

        [$firstKey, $secondKey] = $this->meta['compositeKeys'];
        $builder = $this->builder();
        $existing = $builder->where($firstKey, $key1)->where($secondKey, $key2)->get()->getRowArray();
        if ($existing === null) {
            return $this->failNotFound('Record not found.');
        }

        $builder->where($firstKey, $key1)->where($secondKey, $key2)->update($data);

        return $this->respond(['message' => 'Record updated.']);
    }

    public function deleteComposite(int $key1, int $key2): ResponseInterface
    {
        $invalid = $this->validateControllerMeta();
        if ($invalid !== null) {
            return $invalid;
        }

        if (! $this->isComposite()) {
            return $this->failValidationErrors('This table uses a single primary key.');
        }

        [$firstKey, $secondKey] = $this->meta['compositeKeys'];
        $builder = $this->builder();
        $existing = $builder->where($firstKey, $key1)->where($secondKey, $key2)->get()->getRowArray();
        if ($existing === null) {
            return $this->failNotFound('Record not found.');
        }

        $builder->where($firstKey, $key1)->where($secondKey, $key2)->delete();

        return $this->respondDeleted(['message' => 'Record deleted.']);
    }

    private function isComposite(): bool
    {
        return isset($this->meta['compositeKeys'])
            && is_array($this->meta['compositeKeys'])
            && count($this->meta['compositeKeys']) === 2;
    }

    /**
     * @param array<string, mixed> $payload
     * @param array<int, string> $allowedFields
     * @return array<string, mixed>
     */
    private function filterPayload(array $payload, array $allowedFields): array
    {
        return array_intersect_key($payload, array_flip($allowedFields));
    }

    private function builder(): BaseBuilder
    {
        return $this->database->table($this->tableName);
    }

    private function validateControllerMeta(): ?ResponseInterface
    {
        if ($this->tableName === '' || $this->meta === []) {
            return $this->failServerError('Controller table metadata is not configured.');
        }

        return null;
    }
}
