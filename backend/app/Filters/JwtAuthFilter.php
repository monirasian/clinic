<?php

declare(strict_types=1);

namespace App\Filters;

use App\Libraries\AuthContext;
use App\Libraries\JwtToken;
use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use RuntimeException;

class JwtAuthFilter implements FilterInterface
{
    public function before(RequestInterface $request, $arguments = null)
    {
        $header = (string) $request->getHeaderLine('Authorization');

        if ($header === '' || stripos($header, 'Bearer ') !== 0) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['message' => 'Missing or invalid Authorization header.']);
        }

        $token = trim(substr($header, 7));
        if ($token === '') {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['message' => 'Missing bearer token.']);
        }

        if (JwtToken::isRevoked($token)) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['message' => 'Token has been revoked.']);
        }

        try {
            $payload = JwtToken::decode($token);
            AuthContext::setJwtPayload($payload);
        } catch (RuntimeException $exception) {
            return service('response')
                ->setStatusCode(401)
                ->setJSON(['message' => $exception->getMessage()]);
        }

        return null;
    }

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
    }
}
