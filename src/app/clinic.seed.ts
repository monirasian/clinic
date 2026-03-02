import { DashboardData } from './clinic.models';

export const seedDashboardData: DashboardData = {
  clinics: [
    {
      Id: 1,
      Name: 'Main clinic',
      Phone: '+1-111-111-1111',
      Email: 'main@clinic.com',
      City: 'Metro City',
      State: 'CA',
      Country: 'USA'
    },
    {
      Id: 2,
      Name: 'Branch clinic',
      Phone: '+1-222-222-2222',
      Email: 'branch@clinic.com',
      City: 'Metro City',
      State: 'CA',
      Country: 'USA'
    }
  ],
  departments: [
    { Id: 1, clinicId: 1, Name: 'Cardiology', Description: 'Heart and vascular' },
    { Id: 2, clinicId: 1, Name: 'Pediatrics', Description: 'Children health' },
    { Id: 3, clinicId: 1, Name: 'General Medicine', Description: 'Primary care' }
  ],
  doctors: [
    {
      Id: 1,
      clinicId: 1,
      DepartmentId: 1,
      FirstName: 'Alice',
      LastName: 'Smith',
      Email: 'alice.smith@clinic.com',
      Phone: '+1-555-111-1111',
      LicenseNumber: 'LIC-1001',
      Specialization: 'Cardiologist'
    },
    {
      Id: 2,
      clinicId: 1,
      DepartmentId: 3,
      FirstName: 'Bob',
      LastName: 'Jones',
      Email: 'bob.jones@clinic.com',
      Phone: '+1-555-222-2222',
      LicenseNumber: 'LIC-1002',
      Specialization: 'General Physician'
    }
  ],
  patients: [
    {
      Id: 1,
      clinicId: 1,
      FirstName: 'Michael',
      LastName: 'Brown',
      DateOfBirth: '1980-05-10',
      Gender: 'Male',
      Email: 'michael.brown@example.com',
      Phone: '+1-666-111-1111',
      BloodGroup: 'A+',
      Allergies: 'Peanuts'
    },
    {
      Id: 2,
      clinicId: 1,
      FirstName: 'Emily',
      LastName: 'Clark',
      DateOfBirth: '1990-08-22',
      Gender: 'Female',
      Email: 'emily.clark@example.com',
      Phone: '+1-666-222-2222',
      BloodGroup: 'O-',
      Allergies: 'None'
    }
  ],
  rooms: [
    { Id: 1, clinicId: 1, Name: 'Room 101', RoomType: 'Consultation', Floor: '1' },
    { Id: 2, clinicId: 1, Name: 'Room 102', RoomType: 'Consultation', Floor: '1' }
  ],
  appointments: [
    {
      Id: 1,
      clinicId: 1,
      PatientId: 1,
      DoctorId: 1,
      RoomId: 1,
      ScheduledAt: '2025-01-10T09:30:00',
      DurationMinutes: 30,
      Status: 'Completed',
      Reason: 'Chest pain',
      Notes: 'First visit'
    },
    {
      Id: 2,
      clinicId: 1,
      PatientId: 2,
      DoctorId: 2,
      RoomId: 2,
      ScheduledAt: '2025-01-11T10:00:00',
      DurationMinutes: 30,
      Status: 'Scheduled',
      Reason: 'General checkup',
      Notes: 'N/A'
    }
  ],
  medicalrecords: [
    {
      Id: 1,
      PatientId: 1,
      DoctorId: 1,
      AppointmentId: 1,
      VisitDate: '2025-01-10T09:35:00',
      ChiefComplaint: 'Chest pain for 2 days',
      Diagnosis: 'Suspected angina',
      TreatmentPlan: 'ECG, blood tests, start beta-blocker'
    }
  ],
  labresults: [
    {
      Id: 1,
      PatientId: 1,
      DoctorId: 1,
      AppointmentId: 1,
      TestName: 'Complete Blood Count',
      ResultValue: 'Normal',
      Status: 'Completed',
      Notes: 'All parameters within normal range',
      ReportedAt: '2025-01-10T15:00:00'
    }
  ],
  prescriptions: [
    {
      Id: 1,
      PatientId: 1,
      DoctorId: 1,
      AppointmentId: 1,
      IssuedAt: '2025-01-10T09:50:00',
      Notes: 'Initial prescription for chest pain'
    }
  ],
  prescriptionitems: [
    {
      Id: 1,
      PrescriptionId: 1,
      MedicationName: 'Metoprolol',
      Dosage: '50 mg',
      Frequency: 'Twice a day',
      DurationDays: 30
    }
  ],
  invoices: [
    {
      Id: 1,
      clinicId: 1,
      PatientId: 1,
      AppointmentId: 1,
      InvoiceNumber: 'INV-2025-0001',
      InvoiceDate: '2025-01-10T16:00:00',
      TotalAmount: 220,
      Status: 'Issued'
    }
  ],
  payments: [
    {
      Id: 1,
      InvoiceId: 1,
      PaymentDate: '2025-01-10T16:30:00',
      Amount: 220,
      Method: 'Card',
      ReferenceNumber: 'TXN-10001'
    }
  ]
};
