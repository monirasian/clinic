export interface Appointment {
  Id: number;
  PatientId: number;
  DoctorId: number;
  clinicId?: number;
  RoomId?: number;
  ScheduledAt: string;
  DurationMinutes?: number;
  Reason?: string;
  Notes?: string;
  PatientName?: string;
  DoctorName?: string;
  RoomName?: string;
  Status: string;
}
