export interface Patient {
  Id: number;
  FirstName: string;
  LastName: string;
  DateOfBirth: string;
  Gender: string;
  Email?: string;
  Phone?: string;
  BloodGroup?: string;
  Allergies?: string;
  EmergencyContactName?: string;
  EmergencyContactPhone?: string;
  AddressLine1?: string;
  AddressLine2?: string;
  City?: string;
  State?: string;
  PostalCode?: string;
  clinicId?: number;
  IsActive?: boolean;
}
