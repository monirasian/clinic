<?php

declare(strict_types=1);

namespace App\Libraries;

final class AuthContext
{
    /**
     * @var array<string, mixed>|null
     */
    private static ?array $jwtPayload = null;

    /**
     * @param array<string, mixed> $payload
     */
    public static function setJwtPayload(array $payload): void
    {
        self::$jwtPayload = $payload;
    }

    /**
     * @return array<string, mixed>|null
     */
    public static function jwtPayload(): ?array
    {
        return self::$jwtPayload;
    }

    public static function userId(): ?int
    {
        $payload = self::$jwtPayload;
        if (! is_array($payload)) {
            return null;
        }

        $sub = $payload['sub'] ?? null;
        if (! is_int($sub) && ! (is_string($sub) && ctype_digit($sub))) {
            return null;
        }

        return (int) $sub;
    }

    /**
     * @return list<string>
     */
    public static function roles(): array
    {
        $payload = self::$jwtPayload;
        if (! is_array($payload)) {
            return [];
        }

        $roles = $payload['roles'] ?? [];
        if (! is_array($roles)) {
            return [];
        }

        $normalized = [];
        foreach ($roles as $role) {
            $role = trim((string) $role);
            if ($role !== '') {
                $normalized[] = $role;
            }
        }

        return array_values(array_unique($normalized));
    }

    /**
     * Returns the canonical application roles for the current request.
     *
     * @return list<string>
     */
    public static function canonicalRoles(): array
    {
        $canonical = [];

        foreach (self::roles() as $role) {
            $mapped = self::normalizeRole($role);
            if ($mapped !== null) {
                $canonical[] = $mapped;
            }
        }

        return array_values(array_unique($canonical));
    }

    public static function hasAnyRole(string ...$requiredRoles): bool
    {
        $userRoles = array_map('strtolower', self::canonicalRoles());
        $lookup = array_fill_keys($userRoles, true);

        foreach ($requiredRoles as $role) {
            $role = trim($role);
            if ($role === '') {
                continue;
            }

            $canonical = self::normalizeRole($role) ?? $role;
            $key = strtolower($canonical);

            if (isset($lookup[$key])) {
                return true;
            }
        }

        return false;
    }

    public static function canonicalizeRoleName(string $role): ?string
    {
        return self::normalizeRole($role);
    }

    private static function normalizeRole(string $role): ?string
    {
        $value = strtolower(trim($role));
        if ($value === '') {
            return null;
        }

        // Keep this mapping tight (exact synonyms only).
        return match ($value) {
            'admin',
            'administrator',
            'superadmin',
            'super-admin',
            'super_admin' => 'Admin',

            'doctor',
            'physician' => 'Doctor',

            'nurse' => 'Nurse',

            'receptionist',
            'frontdesk',
            'front_desk',
            'front-desk',
            'frontoffice',
            'front_office',
            'front-office' => 'Receptionist',

            default => null,
        };
    }
}
