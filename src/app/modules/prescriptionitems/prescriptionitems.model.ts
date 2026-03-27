export interface PrescriptionItem {
  Id: number;
  PrescriptionId: number;
  MedicationName: string;
  Dosage: string;
  Frequency?: string;
  Route?: string;
  DurationDays?: number;
  Instructions?: string;
}
