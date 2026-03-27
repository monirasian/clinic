export interface Payment {
  Id: number;
  InvoiceId: number;
  InvoiceNumber?: string;
  PatientId?: number;
  PatientName?: string;
  PaymentDate: string;
  Amount: number;
  Method: string;
  ReferenceNumber?: string;
  Notes?: string;
}
