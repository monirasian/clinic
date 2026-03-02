export interface MedicalRecord {
  Id: number;
  PatientId: number;
  DoctorId?: number;
  AppointmentId?: number;
  VisitDate: string;
  ChiefComplaint?: string;
  Diagnosis: string;
  TreatmentPlan?: string;
  Notes: string;
  PatientName?: string;
  DoctorName?: string;
}
