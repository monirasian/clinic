export interface LabResult {
  Id: number;
  PatientId: number;
  DoctorId?: number;
  AppointmentId?: number;
  TestName: string;
  Status?: string;
  TakenAt?: string;
  ReportedAt?: string;
  ResultValue: string;
  Unit?: string;
  ReferenceRange?: string;
  Notes?: string;
  PatientName?: string;
  DoctorName?: string;
}
