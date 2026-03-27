export interface Doctor {
  Id: number;
  DepartmentId: number;
  clinicId?: number;
  FullName?: string;
  Specialty?: string;
  Email?: string;
  Phone?: string;
  LicenseNumber?: string;
  Bio?: string;
}
