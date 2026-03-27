export type AppointmentStatus = 'Scheduled' | 'Completed' | 'Cancelled' | 'NoShow';
export type InvoiceStatus = 'Draft' | 'Issued' | 'Paid' | 'Cancelled';
export type LabStatus = 'Ordered' | 'InProgress' | 'Completed' | 'Cancelled';
export type PaymentMethod = 'Cash' | 'Card' | 'BankTransfer' | 'Insurance' | 'Other';

export interface clinic {
  Id: number;
  Name: string;
  Phone: string;
  Email: string;
  City: string;
  State: string;
  Country: string;
}

export interface Department {
  Id: number;
  clinicId: number;
  Name: string;
  Description: string;
}

export interface Doctor {
  Id: number;
  clinicId: number;
  DepartmentId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Phone: string;
  LicenseNumber: string;
  Specialization: string;
}

export interface Patient {
  Id: number;
  clinicId: number;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  Gender: 'Male' | 'Female' | 'Other';
  Email: string;
  Phone: string;
  BloodGroup: string;
  Allergies: string;
}

export interface Room {
  Id: number;
  clinicId: number;
  Name: string;
  RoomType: 'Consultation' | 'Surgery' | 'Ward' | 'Lab' | 'Other';
  Floor: string;
}

export interface Appointment {
  Id: number;
  clinicId: number;
  PatientId: number;
  DoctorId: number;
  RoomId: number;
  ScheduledAt: string;
  DurationMinutes: number;
  Status: AppointmentStatus;
  Reason: string;
  Notes: string;
}

export interface MedicalRecord {
  Id: number;
  PatientId: number;
  DoctorId: number;
  AppointmentId: number;
  VisitDate: string;
  ChiefComplaint: string;
  Diagnosis: string;
  TreatmentPlan: string;
}

export interface LabResult {
  Id: number;
  PatientId: number;
  DoctorId: number;
  AppointmentId: number;
  TestName: string;
  ResultValue: string;
  Status: LabStatus;
  Notes: string;
  ReportedAt: string;
}

export interface Prescription {
  Id: number;
  PatientId: number;
  DoctorId: number;
  AppointmentId: number;
  IssuedAt: string;
  Notes: string;
}

export interface PrescriptionItem {
  Id: number;
  PrescriptionId: number;
  MedicationName: string;
  Dosage: string;
  Frequency: string;
  DurationDays: number;
}

export interface Invoice {
  Id: number;
  clinicId: number;
  PatientId: number;
  AppointmentId: number;
  InvoiceNumber: string;
  InvoiceDate: string;
  TotalAmount: number;
  Status: InvoiceStatus;
}

export interface Payment {
  Id: number;
  InvoiceId: number;
  PaymentDate: string;
  Amount: number;
  Method: PaymentMethod;
  ReferenceNumber: string;
}

export interface DashboardData {
  clinics: clinic[];
  departments: Department[];
  doctors: Doctor[];
  patients: Patient[];
  rooms: Room[];
  appointments: Appointment[];
  medicalrecords: MedicalRecord[];
  labresults: LabResult[];
  prescriptions: Prescription[];
  prescriptionitems: PrescriptionItem[];
  invoices: Invoice[];
  payments: Payment[];
}
