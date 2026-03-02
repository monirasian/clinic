<?php

declare(strict_types=1);

namespace Config;

use CodeIgniter\Config\BaseConfig;

class Jwt extends BaseConfig
{
    public string $secret;

    public string $algo;

    public int $ttl;

    public string $issuer;

    public function __construct()
    {
        $this->secret = (string) env('jwt.secret', 'change_this_to_a_long_random_secret_key');
        $this->algo = (string) env('jwt.algo', 'HS256');
        $this->ttl = (int) env('jwt.ttl', 3600);
        $this->issuer = (string) env('jwt.issuer', 'clinic-api');
    }
}
