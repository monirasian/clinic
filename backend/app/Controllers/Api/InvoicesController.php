<?php

declare(strict_types=1);

namespace App\Controllers\Api;

class InvoicesController extends BaseTableCrudController
{
    protected string $tableName = 'invoices';
}
