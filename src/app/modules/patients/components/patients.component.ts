import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Patient } from '../patients.model';
import { PatientsService } from '../patients.service';

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="patients-page">
      <header class="toolbar">
        <div>
          <h2>Patients</h2>
          <p>Manage patient registry and profile details.</p>
        </div>
        <button type="button" (click)="startCreate()" [disabled]="isSaving">+ New Patient</button>
      </header>

      <div class="filters">
        <input
          type="text"
          [(ngModel)]="search"
          placeholder="Search by name, email, phone"
          aria-label="Search patients"
        />

        <select [(ngModel)]="genderFilter" aria-label="Filter by gender">
          <option value="all">All Genders</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

        <select [(ngModel)]="activeFilter" aria-label="Filter by active status">
          <option value="all">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>

        <select [(ngModel)]="clinicFilter" aria-label="Filter by clinic">
          <option value="all">All clinics</option>
          <option *ngFor="let clinic of clinicOptions" [value]="clinic">clinic {{ clinic }}</option>
        </select>
      </div>

      <p *ngIf="loading">Loading...</p>
      <p *ngIf="error" class="error">{{ error }}</p>

      <div class="content-grid" *ngIf="!loading && !error">
        <div class="card">
          <table *ngIf="filteredPatients.length > 0" class="patients-table">
            <thead>
              <tr>
                <th>Patient</th>
                <th>DOB / Age</th>
                <th>Gender</th>
                <th>Phone / Email</th>
                <th>Blood Group</th>
                <th>Allergies</th>
                <th>clinic</th>
                <th>Active</th>
              </tr>
            </thead>
            <tbody>
              <tr
                *ngFor="let patient of filteredPatients"
                (click)="selectPatient(patient)"
                [class.selected]="selectedPatient?.Id === patient.Id"
              >
                <td>{{ fullName(patient) }}</td>
                <td>{{ patient.DateOfBirth || '-' }} / {{ age(patient.DateOfBirth) }}</td>
                <td>{{ patient.Gender || '-' }}</td>
                <td>{{ patient.Phone || '-' }} / {{ patient.Email || '-' }}</td>
                <td>{{ patient.BloodGroup || '-' }}</td>
                <td>{{ patient.Allergies || '-' }}</td>
                <td>{{ patient.clinicId ?? '-' }}</td>
                <td>
                  <span class="status" [class.inactive]="patient.IsActive === false">
                    {{ patient.IsActive === false ? 'Inactive' : 'Active' }}
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

          <p *ngIf="filteredPatients.length === 0" class="empty">No patients found.</p>
        </div>

        <aside class="card detail" *ngIf="selectedPatient">
          <h3>{{ fullName(selectedPatient) }}</h3>
          <p>{{ selectedPatient.Email || 'No email' }} · {{ selectedPatient.Phone || 'No phone' }}</p>

          <div class="tabs">
            <button
              type="button"
              *ngFor="let tab of profileTabs"
              [class.active]="selectedTab === tab.key"
              (click)="selectedTab = tab.key"
            >
              {{ tab.label }}
            </button>
          </div>

          <div class="panel" *ngIf="selectedTab === 'overview'">
            <p><strong>Gender:</strong> {{ selectedPatient.Gender || '-' }}</p>
            <p><strong>DOB:</strong> {{ selectedPatient.DateOfBirth || '-' }}</p>
            <p><strong>Blood Group:</strong> {{ selectedPatient.BloodGroup || '-' }}</p>
            <p><strong>Allergies:</strong> {{ selectedPatient.Allergies || '-' }}</p>
            <p><strong>Emergency:</strong> {{ selectedPatient.EmergencyContactName || '-' }}</p>
            <p><strong>Address:</strong> {{ address(selectedPatient) }}</p>
          </div>

          <div class="panel" *ngIf="selectedTab !== 'overview'">
            <p>{{ selectedTabLabel() }} content will be connected in the next phase.</p>
          </div>
        </aside>
      </div>

      <section class="card create-form" *ngIf="showCreateForm">
        <h3>New Patient</h3>
        <form (ngSubmit)="createPatient()">
          <div class="grid two-col">
            <label>
              First Name
              <input name="firstName" [(ngModel)]="form.FirstName" required />
            </label>
            <label>
              Last Name
              <input name="lastName" [(ngModel)]="form.LastName" required />
            </label>
            <label>
              Date of Birth
              <input type="date" name="dob" [(ngModel)]="form.DateOfBirth" />
            </label>
            <label>
              Gender
              <select name="gender" [(ngModel)]="form.Gender">
                <option value="">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>
              Email
              <input name="email" [(ngModel)]="form.Email" />
            </label>
            <label>
              Phone
              <input name="phone" [(ngModel)]="form.Phone" />
            </label>
            <label>
              Blood Group
              <input name="bloodGroup" [(ngModel)]="form.BloodGroup" />
            </label>
            <label>
              Allergies
              <input name="allergies" [(ngModel)]="form.Allergies" />
            </label>
            <label>
              Emergency Contact Name
              <input name="emergencyName" [(ngModel)]="form.EmergencyContactName" />
            </label>
            <label>
              Emergency Contact Phone
              <input name="emergencyPhone" [(ngModel)]="form.EmergencyContactPhone" />
            </label>
            <label>
              clinic Id
              <input type="number" name="clinicId" [(ngModel)]="form.clinicId" required />
            </label>
            <label>
              Active
              <select name="isActive" [(ngModel)]="form.IsActive">
                <option [ngValue]="true">Active</option>
                <option [ngValue]="false">Inactive</option>
              </select>
            </label>
          </div>

          <div class="actions">
            <button type="submit" [disabled]="isSaving">{{ isSaving ? 'Saving...' : 'Save Patient' }}</button>
            <button type="button" class="secondary" (click)="cancelCreate()" [disabled]="isSaving">Cancel</button>
          </div>
        </form>
      </section>
    </section>
  `,
  styles: [
    `
      .patients-page {
        display: grid;
        gap: 12px;
      }

      .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .toolbar h2 {
        margin: 0;
      }

      .toolbar p {
        margin: 4px 0 0;
        color: #64748b;
      }

      button {
        border: 1px solid #1e40af;
        background: #1e40af;
        color: white;
        border-radius: 10px;
        padding: 8px 12px;
        font-weight: 600;
        cursor: pointer;
      }

      .secondary {
        border-color: #cbd5e1;
        background: white;
        color: #0f172a;
      }

      .filters {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr 1fr;
        gap: 8px;
      }

      .filters input,
      .filters select,
      .create-form input,
      .create-form select {
        border: 1px solid #cbd5e1;
        border-radius: 8px;
        padding: 8px 10px;
      }

      .content-grid {
        display: grid;
        grid-template-columns: 2fr 1fr;
        gap: 12px;
      }

      .card {
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        background: white;
        padding: 12px;
      }

      .patients-table {
        width: 100%;
        border-collapse: collapse;
      }

      .patients-table th,
      .patients-table td {
        border-bottom: 1px solid #e2e8f0;
        padding: 8px;
        text-align: left;
        vertical-align: top;
      }

      .patients-table tr {
        cursor: pointer;
      }

      .patients-table tr.selected {
        background: #eff6ff;
      }

      .status {
        border: 1px solid #16a34a;
        color: #16a34a;
        border-radius: 999px;
        padding: 2px 8px;
        font-size: 0.75rem;
      }

      .status.inactive {
        border-color: #94a3b8;
        color: #475569;
      }

      .tabs {
        display: flex;
        flex-wrap: wrap;
        gap: 6px;
        margin: 12px 0;
      }

      .tabs button {
        border: 1px solid #cbd5e1;
        background: white;
        color: #0f172a;
        padding: 6px 10px;
      }

      .tabs button.active {
        border-color: #1e40af;
        background: #dbeafe;
        color: #1e40af;
      }

      .panel p {
        margin: 4px 0;
      }

      .grid.two-col {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;
      }

      .grid.two-col label {
        display: grid;
        gap: 4px;
        font-weight: 600;
      }

      .actions {
        margin-top: 10px;
        display: flex;
        gap: 8px;
      }

      .error {
        color: #dc2626;
      }

      .empty {
        margin: 0;
        color: #64748b;
      }

      @media (max-width: 1080px) {
        .content-grid {
          grid-template-columns: 1fr;
        }

        .filters {
          grid-template-columns: 1fr 1fr;
        }

        .grid.two-col {
          grid-template-columns: 1fr;
        }
      }
    `
  ]
})
export class PatientsComponent implements OnInit {
  data: Patient[] = [];
  loading = false;
  error: string | null = null;
  search = '';
  genderFilter = 'all';
  activeFilter = 'all';
  clinicFilter = 'all';
  isSaving = false;
  showCreateForm = false;
  selectedPatient: Patient | null = null;
  selectedTab = 'overview';
  readonly profileTabs = [
    { key: 'overview', label: 'Overview' },
    { key: 'appointments', label: 'Appointments' },
    { key: 'medicalrecords', label: 'Medical Records' },
    { key: 'labresults', label: 'Lab Results' },
    { key: 'prescriptions', label: 'Prescriptions' },
    { key: 'billing', label: 'Invoices & Payments' }
  ];
  form: Patient = this.emptyForm();

  constructor(private readonly patientsService: PatientsService) {}

  get filteredPatients(): Patient[] {
    return this.data.filter((patient) => {
      const text = this.search.trim().toLowerCase();
      const matchesSearch =
        !text ||
        this.fullName(patient).toLowerCase().includes(text) ||
        (patient.Email || '').toLowerCase().includes(text) ||
        (patient.Phone || '').toLowerCase().includes(text);

      const matchesGender =
        this.genderFilter === 'all' || (patient.Gender || '').toLowerCase() === this.genderFilter;

      const isActive = patient.IsActive !== false;
      const matchesActive =
        this.activeFilter === 'all' ||
        (this.activeFilter === 'active' && isActive) ||
        (this.activeFilter === 'inactive' && !isActive);

      const matchesclinic =
        this.clinicFilter === 'all' || String(patient.clinicId ?? '') === this.clinicFilter;

      return matchesSearch && matchesGender && matchesActive && matchesclinic;
    });
  }

  get clinicOptions(): string[] {
    const values = this.data
      .map((patient) => patient.clinicId)
      .filter((value): value is number => typeof value === 'number')
      .map((value) => String(value));

    return Array.from(new Set(values)).sort((a, b) => Number(a) - Number(b));
  }

  ngOnInit(): void {
    this.loadPatients();
  }

  private loadPatients(selectId?: number): void {
    this.loading = true;
    this.error = null;
    this.patientsService.getAll().subscribe({
      next: (data) => {
        this.data = data;
        if (this.data.length === 0) {
          this.selectedPatient = null;
        } else if (selectId) {
          this.selectedPatient = this.data.find((patient) => patient.Id === selectId) || this.data[0];
        } else {
          this.selectedPatient = this.data[0];
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to load patients.';
        this.loading = false;
      }
    });
  }

  fullName(patient: Patient): string {
    return `${patient.FirstName || ''} ${patient.LastName || ''}`.trim() || 'Unknown Patient';
  }

  age(dateOfBirth: string): string {
    if (!dateOfBirth) {
      return '-';
    }

    const dob = new Date(dateOfBirth);
    if (Number.isNaN(dob.getTime())) {
      return '-';
    }

    const today = new Date();
    let years = today.getFullYear() - dob.getFullYear();
    const monthDelta = today.getMonth() - dob.getMonth();

    if (monthDelta < 0 || (monthDelta === 0 && today.getDate() < dob.getDate())) {
      years--;
    }

    return years >= 0 ? `${years}` : '-';
  }

  selectPatient(patient: Patient): void {
    this.selectedPatient = patient;
    this.selectedTab = 'overview';
  }

  address(patient: Patient): string {
    const parts = [patient.AddressLine1, patient.AddressLine2, patient.City, patient.State, patient.PostalCode]
      .filter((part) => typeof part === 'string' && part.trim().length > 0)
      .join(', ');

    return parts || '-';
  }

  selectedTabLabel(): string {
    const found = this.profileTabs.find((tab) => tab.key === this.selectedTab);
    return found ? found.label : 'Tab';
  }

  startCreate(): void {
    this.showCreateForm = true;
    this.form = this.emptyForm();
  }

  cancelCreate(): void {
    this.showCreateForm = false;
    this.form = this.emptyForm();
  }

  createPatient(): void {
    if (this.isSaving) {
      return;
    }

    if (!this.form.FirstName?.trim() || !this.form.LastName?.trim()) {
      return;
    }

    const payload: Patient = {
      ...this.form,
      Id: 0,
      FirstName: this.form.FirstName.trim(),
      LastName: this.form.LastName.trim(),
      IsActive: this.form.IsActive !== false
    };

    this.loading = true;
    this.isSaving = true;
    this.patientsService.create(payload).subscribe((saved) => {
      if (saved) {
        this.isSaving = false;
        this.showCreateForm = false;
        this.form = this.emptyForm();
        this.selectedTab = 'overview';
        this.loadPatients();
        return;
      }

      const nextId = this.data.length > 0 ? Math.max(...this.data.map((patient) => patient.Id || 0)) + 1 : 1;
      const localPatient = { ...payload, Id: nextId };
      this.data = [localPatient, ...this.data];
      this.selectedPatient = localPatient;
      this.selectedTab = 'overview';
      this.showCreateForm = false;
      this.form = this.emptyForm();
      this.isSaving = false;
      this.loading = false;
      this.error = 'Patient API create endpoint was not available. Saved locally in UI.';
    });
  }

  private emptyForm(): Patient {
    return {
      Id: 0,
      FirstName: '',
      LastName: '',
      DateOfBirth: '',
      Gender: '',
      Email: '',
      Phone: '',
      BloodGroup: '',
      Allergies: '',
      EmergencyContactName: '',
      EmergencyContactPhone: '',
      AddressLine1: '',
      AddressLine2: '',
      City: '',
      State: '',
      PostalCode: '',
      clinicId: 1,
      IsActive: true
    };
  }
}

