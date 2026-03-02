<?php

declare(strict_types=1);

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use App\Libraries\AuthContext;
use App\Libraries\JwtToken;
use Config\Jwt as JwtConfig;
use CodeIgniter\API\ResponseTrait;
use CodeIgniter\HTTP\ResponseInterface;

class AuthController extends BaseController
{
    use ResponseTrait;

    public function login(): ResponseInterface
    {
        $payload = $this->request->getJSON(true);
        if (! is_array($payload) || $payload === []) {
            $payload = $this->request->getPost();
        }

        $username = trim((string) ($payload['username'] ?? $payload['Username'] ?? $payload['email'] ?? $payload['Email'] ?? ''));
        $password = (string) ($payload['password'] ?? $payload['Password'] ?? '');

        if ($username === '' || $password === '') {
            return $this->failValidationErrors('username and password are required.');
        }

        $user = db_connect()->table('users')->where('UserName', $username)->get()->getRowArray();
        if ($user === null || ! $this->verifyPassword($password, (string) ($user['PasswordHash'] ?? ''))) {
            return $this->failUnauthorized('Invalid credentials.');
        }

        $roleRows = db_connect()
            ->table('userroles ur')
            ->select('r.Name')
            ->join('roles r', 'r.Id = ur.RoleId')
            ->where('ur.UserId', (int) $user['Id'])
            ->get()
            ->getResultArray();

        $rawRoles = [];
        foreach ($roleRows as $row) {
            $name = trim((string) ($row['Name'] ?? ''));
            if ($name !== '') {
                $rawRoles[] = $name;
            }
        }

        $rawRoles = array_values(array_unique($rawRoles));

        $roles = [];
        foreach ($rawRoles as $roleName) {
            $canonical = AuthContext::canonicalizeRoleName($roleName);
            if ($canonical !== null) {
                $roles[] = $canonical;
            }
        }
        $roles = array_values(array_unique($roles));

        $primaryRole = $this->pickPrimaryRole($roles);

        $jwtConfig = config(JwtConfig::class);
        $issuedAt = time();
        $expiresAt = $issuedAt + $jwtConfig->ttl;

        $token = JwtToken::encode([
            'sub'      => (int) $user['Id'],
            'username' => (string) $user['UserName'],
            'email'    => (string) $user['Email'],
            'role'     => $primaryRole,
            'roles'    => $roles,
            'roles_raw' => $rawRoles,
            'iat'      => $issuedAt,
            'exp'      => $expiresAt,
            'iss'      => $jwtConfig->issuer,
        ]);

        return $this->respond([
            'access_token' => $token,
            'token_type'   => 'Bearer',
            'expires_in'   => $jwtConfig->ttl,
            'role'         => $primaryRole,
            'user'         => [
                'id'       => (int) $user['Id'],
                'username' => (string) $user['UserName'],
                'email'    => (string) $user['Email'],
                'role'     => $primaryRole,
                'roles'    => $roles,
                'roles_raw' => $rawRoles,
            ],
        ]);
    }

    public function logout(): ResponseInterface
    {
        $header = (string) $this->request->getHeaderLine('Authorization');

        if ($header === '' || stripos($header, 'Bearer ') !== 0) {
            return $this->failUnauthorized('Missing or invalid Authorization header.');
        }

        $token = trim(substr($header, 7));
        if ($token === '') {
            return $this->failUnauthorized('Missing bearer token.');
        }

        JwtToken::revoke($token);

        return $this->respond(['message' => 'Logged out successfully.']);
    }

    private function verifyPassword(string $plainPassword, string $storedHash): bool
    {
        if ($storedHash === '') {
            return false;
        }

        if (password_verify($plainPassword, $storedHash)) {
            return true;
        }

        return hash_equals($storedHash, $plainPassword);
    }

    /**
     * @param list<string> $roles
     */
    private function pickPrimaryRole(array $roles): string
    {
        $priority = ['Admin', 'Doctor', 'Nurse', 'Receptionist'];
        $lookup = array_fill_keys($roles, true);

        foreach ($priority as $candidate) {
            if (isset($lookup[$candidate])) {
                return $candidate;
            }
        }

        return 'Admin';
    }
}
