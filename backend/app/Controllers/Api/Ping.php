<?php

namespace App\Controllers\Api;

use App\Controllers\BaseController;
use CodeIgniter\HTTP\ResponseInterface;

class Ping extends BaseController
{
    public function index(): ResponseInterface
    {
        return $this->response->setJSON([
            'ok' => true,
            'time' => date(DATE_ATOM),
        ]);
    }
}
