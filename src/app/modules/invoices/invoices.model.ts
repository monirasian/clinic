export interface Invoice {
  Id: number;
  clinicId?: number;
  PatientId: number;
  AppointmentId?: number;
  InvoiceNumber?: string;
  InvoiceDate: string;
  Subtotal?: number;
  TaxAmount?: number;
  DiscountAmount?: number;
  TotalAmount: number;
  Notes?: string;
  PatientName?: string;
  Balance?: number;
  Status: string;
}
