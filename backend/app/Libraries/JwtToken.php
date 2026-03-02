<?php

declare(strict_types=1);

namespace App\Libraries;

use Config\Jwt as JwtConfig;
use RuntimeException;

class JwtToken
{
    /**
     * @param array<string, mixed> $payload
     */
    public static function encode(array $payload): string
    {
        $config = config(JwtConfig::class);

        if (strtoupper($config->algo) !== 'HS256') {
            throw new RuntimeException('Unsupported JWT algorithm.');
        }

        $header = ['typ' => 'JWT', 'alg' => 'HS256'];

        $headerEncoded = self::base64UrlEncode((string) json_encode($header, JSON_UNESCAPED_SLASHES));
        $payloadEncoded = self::base64UrlEncode((string) json_encode($payload, JSON_UNESCAPED_SLASHES));

        $signature = hash_hmac('sha256', $headerEncoded . '.' . $payloadEncoded, $config->secret, true);
        $signatureEncoded = self::base64UrlEncode($signature);

        return $headerEncoded . '.' . $payloadEncoded . '.' . $signatureEncoded;
    }

    /**
     * @return array<string, mixed>
     */
    public static function decode(string $token): array
    {
        $config = config(JwtConfig::class);
        $parts = explode('.', $token);

        if (count($parts) !== 3) {
            throw new RuntimeException('Invalid token structure.');
        }

        [$headerEncoded, $payloadEncoded, $signatureEncoded] = $parts;

        $header = json_decode(self::base64UrlDecode($headerEncoded), true);
        if (! is_array($header) || ($header['alg'] ?? null) !== 'HS256') {
            throw new RuntimeException('Invalid token header.');
        }

        $expectedSignature = hash_hmac('sha256', $headerEncoded . '.' . $payloadEncoded, $config->secret, true);
        $providedSignature = self::base64UrlDecode($signatureEncoded);

        if (! hash_equals($expectedSignature, $providedSignature)) {
            throw new RuntimeException('Invalid token signature.');
        }

        $payload = json_decode(self::base64UrlDecode($payloadEncoded), true);
        if (! is_array($payload)) {
            throw new RuntimeException('Invalid token payload.');
        }

        if (isset($payload['exp']) && is_numeric($payload['exp']) && time() > (int) $payload['exp']) {
            throw new RuntimeException('Token has expired.');
        }

        return $payload;
    }

    public static function revoke(string $token): void
    {
        $payload = self::decode($token);
        $config = config(JwtConfig::class);

        $expiresAt = isset($payload['exp']) && is_numeric($payload['exp'])
            ? (int) $payload['exp']
            : (time() + $config->ttl);

        $ttl = max(1, $expiresAt - time());
        cache()->save(self::revokeKey($token), 1, $ttl);
    }

    public static function isRevoked(string $token): bool
    {
        return cache()->get(self::revokeKey($token)) !== null;
    }

    private static function revokeKey(string $token): string
    {
        return 'jwt_revoked_' . hash('sha256', $token);
    }

    private static function base64UrlEncode(string $data): string
    {
        return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
    }

    private static function base64UrlDecode(string $data): string
    {
        $remainder = strlen($data) % 4;
        if ($remainder > 0) {
            $data .= str_repeat('=', 4 - $remainder);
        }

        $decoded = base64_decode(strtr($data, '-_', '+/'), true);
        if ($decoded === false) {
            throw new RuntimeException('Invalid base64 token segment.');
        }

        return $decoded;
    }
}
