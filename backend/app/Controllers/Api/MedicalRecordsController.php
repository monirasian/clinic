<?php

declare(strict_types=1);

namespace App\Controllers\Api;

class MedicalRecordsController extends BaseTableCrudController
{
    protected string $tableName = 'medicalrecords';
}
