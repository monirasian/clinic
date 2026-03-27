<?php

declare(strict_types=1);

namespace App\Controllers\Api;

class PatientsController extends BaseTableCrudController
{
    protected string $tableName = 'patients';
}
