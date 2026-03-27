<?php

declare(strict_types=1);

namespace Config;

class ApiSchema
{
    /**
     * Table metadata used by the dynamic API controller.
     *
     * @var array<string, array<string, mixed>>
     */
    public array $tables = [
        'appointments' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['clinicId', 'PatientId', 'DoctorId', 'RoomId', 'ScheduledAt', 'DurationMinutes', 'Status', 'Reason', 'Notes', 'CreatedAt', 'UpdatedAt'],
        ],
        'clinics' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['Name', 'Phone', 'Email', 'AddressLine1', 'AddressLine2', 'City', 'State', 'PostalCode', 'Country', 'IsActive', 'CreatedAt'],
        ],
        'departments' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['clinicId', 'Name', 'Description', 'IsActive', 'CreatedAt'],
        ],
        'doctors' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['UserId', 'clinicId', 'DepartmentId', 'FirstName', 'LastName', 'Email', 'Phone', 'LicenseNumber', 'Specialization', 'IsActive', 'CreatedAt'],
        ],
        'invoiceitems' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['InvoiceId', 'Description', 'Quantity', 'UnitPrice', 'LineTotal'],
        ],
        'invoices' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['clinicId', 'PatientId', 'AppointmentId', 'InvoiceNumber', 'InvoiceDate', 'SubtotalAmount', 'TaxAmount', 'DiscountAmount', 'TotalAmount', 'Status', 'Notes', 'CreatedAt', 'UpdatedAt'],
        ],
        'labresults' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['PatientId', 'DoctorId', 'AppointmentId', 'TestName', 'ResultValue', 'Unit', 'ReferenceRange', 'Status', 'Notes', 'TakenAt', 'ReportedAt', 'CreatedAt'],
        ],
        'medicalrecords' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['PatientId', 'DoctorId', 'AppointmentId', 'VisitDate', 'ChiefComplaint', 'Diagnosis', 'TreatmentPlan', 'Notes', 'CreatedAt'],
        ],
        'patients' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['clinicId', 'FirstName', 'LastName', 'DateOfBirth', 'Gender', 'Email', 'Phone', 'EmergencyContactName', 'EmergencyContactPhone', 'AddressLine1', 'AddressLine2', 'City', 'State', 'PostalCode', 'Country', 'BloodGroup', 'Allergies', 'IsActive', 'CreatedAt'],
        ],
        'paymentitems' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['PaymentId', 'Method', 'Amount', 'Details'],
        ],
        'payments' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['InvoiceId', 'PaymentDate', 'Amount', 'Method', 'ReferenceNumber', 'Notes', 'CreatedAt'],
        ],
        'prescriptionitems' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['PrescriptionId', 'MedicationName', 'Dosage', 'Frequency', 'Route', 'DurationDays', 'Instructions'],
        ],
        'prescriptions' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['PatientId', 'DoctorId', 'AppointmentId', 'IssuedAt', 'Notes'],
        ],
        'roles' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['Name', 'Description'],
        ],
        'rooms' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['clinicId', 'Name', 'RoomType', 'Floor', 'IsActive', 'CreatedAt'],
        ],
        'schedules' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['DoctorId', 'DayOfWeek', 'StartTime', 'EndTime', 'IsActive', 'CreatedAt'],
        ],
        'staff' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['UserId', 'clinicId', 'FirstName', 'LastName', 'Email', 'Phone', 'Position', 'IsActive', 'CreatedAt'],
        ],
        'userroles' => [
            'primaryKey'    => null,
            'compositeKeys' => ['UserId', 'RoleId'],
            'allowedFields' => ['UserId', 'RoleId'],
        ],
        'users' => [
            'primaryKey'    => 'Id',
            'compositeKeys' => [],
            'allowedFields' => ['UserName', 'PasswordHash', 'Email', 'IsActive', 'CreatedAt'],
        ],
    ];
}
