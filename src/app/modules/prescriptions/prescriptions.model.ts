export interface Prescription {
  Id: number;
  PatientId: number;
  DoctorId: number;
  AppointmentId?: number;
  IssuedAt: string;
  Notes: string;
  PatientName?: string;
  DoctorName?: string;
  ItemsCount?: number;
}

export interface PrescriptionMedicationItem {
  Id: number;
  PrescriptionId: number;
  MedicationName: string;
  Dosage?: string;
  Frequency?: string;
  Route?: string;
  DurationDays?: number;
  Instructions?: string;
}
