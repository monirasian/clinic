<?php

declare(strict_types=1);

namespace App\Controllers\Api;

use CodeIgniter\HTTP\ResponseInterface;

class UserRolesController extends BaseTableCrudController
{
    protected string $tableName = 'userroles';

    public function index(): ResponseInterface
    {
        return parent::index();
    }

    public function create(): ResponseInterface
    {
        return parent::create();
    }

    public function showComposite(int $userId, int $roleId): ResponseInterface
    {
        return parent::showComposite($userId, $roleId);
    }

    public function updateComposite(int $userId, int $roleId): ResponseInterface
    {
        return parent::updateComposite($userId, $roleId);
    }

    public function deleteComposite(int $userId, int $roleId): ResponseInterface
    {
        return parent::deleteComposite($userId, $roleId);
    }
}
