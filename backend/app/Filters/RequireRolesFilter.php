<?php

declare(strict_types=1);

namespace App\Filters;

use App\Libraries\AuthContext;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;

class RequireRolesFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $required = [];

        if (is_array($arguments)) {
            foreach ($arguments as $arg) {
                $arg = trim((string) $arg);
                if ($arg !== '') {
                    $required[] = $arg;
                }
            }
        }

        if ($required === []) {
            return null;
        }

        if (AuthContext::hasAnyRole(...$required)) {
            return null;
        }

        return service('response')
            ->setStatusCode(403)
            ->setJSON([
                'message' => 'Forbidden: insufficient role.',
                'required_roles' => $required,
                'user_roles' => AuthContext::roles(),
                'user_canonical_roles' => AuthContext::canonicalRoles(),
            ]);
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}
