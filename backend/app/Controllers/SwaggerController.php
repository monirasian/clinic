<?php

declare(strict_types=1);

namespace App\Controllers;

use Config\ApiSchema;
use CodeIgniter\HTTP\ResponseInterface;

class SwaggerController extends BaseController
{
    public function index(): string
    {
        return view('swagger_ui');
    }

    public function json(): ResponseInterface
    {
        return $this->response->setJSON($this->buildSpec());
    }

    /**
     * @return array<string, mixed>
     */
    private function buildSpec(): array
    {
        $serverUrl = $this->resolveServerUrl();
        $tables = config(ApiSchema::class)->tables;

        $paths = [];
        $tags = [
            ['name' => 'Auth', 'description' => 'Authentication endpoints'],
        ];

        foreach ($tables as $table => $meta) {
            $basePath = '/api/' . $table;
            $tagName = ucfirst((string) $table);

            $publicGetTables = ['clinics', 'departments', 'doctors', 'staff'];
            $getSecurity = in_array($table, $publicGetTables, true) ? [] : [['bearerAuth' => []]];

            $tags[] = ['name' => $tagName];

            $paths[$basePath] = [
                'get' => [
                    'summary'   => 'List ' . $table,
                    'tags'      => [$tagName],
                    'security'  => $getSecurity,
                    'responses' => ['200' => ['description' => 'Records returned']],
                ],
                'post' => [
                    'summary'     => 'Create in ' . $table,
                    'tags'        => [$tagName],
                    'security'    => [['bearerAuth' => []]],
                    'requestBody' => [
                        'required' => true,
                        'content'  => [
                            'application/json' => [
                                'schema' => ['type' => 'object', 'additionalProperties' => true],
                            ],
                        ],
                    ],
                    'responses' => ['201' => ['description' => 'Created']],
                ],
            ];

            $composite = isset($meta['compositeKeys']) && is_array($meta['compositeKeys']) && count($meta['compositeKeys']) === 2;

            if ($composite) {
                $paths[$basePath . '/{key1}/{key2}'] = [
                    'get' => [
                        'summary'    => 'Get ' . $table . ' by composite key',
                        'tags'       => [$tagName],
                        'security'   => $getSecurity,
                        'parameters' => $this->compositeParams(),
                        'responses'  => [
                            '200' => ['description' => 'Record returned'],
                            '404' => ['description' => 'Not found'],
                        ],
                    ],
                    'put' => [
                        'summary'     => 'Update ' . $table . ' by composite key',
                        'tags'        => [$tagName],
                        'security'    => [['bearerAuth' => []]],
                        'parameters'  => $this->compositeParams(),
                        'requestBody' => [
                            'required' => true,
                            'content'  => [
                                'application/json' => [
                                    'schema' => ['type' => 'object', 'additionalProperties' => true],
                                ],
                            ],
                        ],
                        'responses' => ['200' => ['description' => 'Updated']],
                    ],
                    'delete' => [
                        'summary'    => 'Delete ' . $table . ' by composite key',
                        'tags'       => [$tagName],
                        'security'   => [['bearerAuth' => []]],
                        'parameters' => $this->compositeParams(),
                        'responses'  => ['200' => ['description' => 'Deleted']],
                    ],
                ];

                continue;
            }

            $paths[$basePath . '/{id}'] = [
                'get' => [
                    'summary'    => 'Get ' . $table . ' by ID',
                    'tags'       => [$tagName],
                    'security'   => $getSecurity,
                    'parameters' => $this->singleKeyParams(),
                    'responses'  => [
                        '200' => ['description' => 'Record returned'],
                        '404' => ['description' => 'Not found'],
                    ],
                ],
                'put' => [
                    'summary'     => 'Update ' . $table . ' by ID',
                    'tags'        => [$tagName],
                    'security'    => [['bearerAuth' => []]],
                    'parameters'  => $this->singleKeyParams(),
                    'requestBody' => [
                        'required' => true,
                        'content'  => [
                            'application/json' => [
                                'schema' => ['type' => 'object', 'additionalProperties' => true],
                            ],
                        ],
                    ],
                    'responses' => ['200' => ['description' => 'Updated']],
                ],
                'delete' => [
                    'summary'    => 'Delete ' . $table . ' by ID',
                    'tags'       => [$tagName],
                    'security'   => [['bearerAuth' => []]],
                    'parameters' => $this->singleKeyParams(),
                    'responses'  => ['200' => ['description' => 'Deleted']],
                ],
            ];
        }

        return [
            'openapi' => '3.0.3',
            'info'    => [
                'title'       => 'clinic API',
                'description' => 'Swagger/OpenAPI documentation for the clinic backend API.',
                'version'     => '1.0.0',
            ],
            'servers' => [
                ['url' => $serverUrl],
            ],
            'security' => [
                ['bearerAuth' => []],
            ],
            'tags'  => $tags,
            'paths' => array_merge([
                '/api/ping' => [
                    'get' => [
                        'summary'   => 'Health check',
                        'tags'      => ['Auth'],
                        'security'  => [],
                        'responses' => ['200' => ['description' => 'OK']],
                    ],
                ],
                '/api/login' => [
                    'post' => [
                        'summary'     => 'Login and get JWT token',
                        'tags'        => ['Auth'],
                        'security'    => [],
                        'requestBody' => [
                            'required' => true,
                            'content'  => [
                                'application/json' => [
                                    'schema' => [
                                        'type'       => 'object',
                                        'required'   => ['username', 'password'],
                                        'properties' => [
                                            'username' => ['type' => 'string'],
                                            'password' => ['type' => 'string'],
                                        ],
                                    ],
                                ],
                            ],
                        ],
                        'responses' => [
                            '200' => ['description' => 'Token generated'],
                            '401' => ['description' => 'Invalid credentials'],
                            '422' => ['description' => 'Validation error'],
                        ],
                    ],
                ],
                '/api/logout' => [
                    'post' => [
                        'summary'   => 'Logout and revoke JWT token',
                        'tags'      => ['Auth'],
                        'responses' => [
                            '200' => ['description' => 'Logged out successfully'],
                            '401' => ['description' => 'Unauthorized'],
                            '403' => ['description' => 'Forbidden'],
                        ],
                    ],
                ],
            ], $paths),
            'components' => [
                'securitySchemes' => [
                    'bearerAuth' => [
                        'type'         => 'http',
                        'scheme'       => 'bearer',
                        'bearerFormat' => 'JWT',
                    ],
                ],
            ],
        ];
    }

    private function resolveServerUrl(): string
    {
        $host = (string) ($this->request->getServer('HTTP_HOST') ?? 'localhost');
        $scheme = $this->request->isSecure() ? 'https' : 'http';

        $path = (string) $this->request->getUri()->getPath();
        // Requests typically look like /clinic/swagger or /clinic/swagger.json.
        $path = preg_replace('#/(swagger(?:\.json)?)$#', '', $path) ?? $path;
        $path = rtrim($path, '/');

        return $scheme . '://' . $host . ($path === '' ? '' : $path);
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function singleKeyParams(): array
    {
        return [[
            'name'     => 'id',
            'in'       => 'path',
            'required' => true,
            'schema'   => ['type' => 'integer'],
        ]];
    }

    /**
     * @return list<array<string, mixed>>
     */
    private function compositeParams(): array
    {
        return [
            [
                'name'     => 'key1',
                'in'       => 'path',
                'required' => true,
                'schema'   => ['type' => 'integer'],
            ],
            [
                'name'     => 'key2',
                'in'       => 'path',
                'required' => true,
                'schema'   => ['type' => 'integer'],
            ],
        ];
    }
}
