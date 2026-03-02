import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

import { clinic } from '../modules/clinics/clinics.model';
import { clinicsService } from '../modules/clinics/clinics.service';
import { Department } from '../modules/departments/departments.model';
import { DepartmentsService } from '../modules/departments/departments.service';
import { Doctor } from '../modules/doctors/doctors.model';
import { DoctorsService } from '../modules/doctors/doctors.service';

@Component({
  selector: 'app-dashboad',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, TranslateModule],
  templateUrl: './dashboad.component.html',
  styleUrl: './dashboad.component.scss'
})
export class DashboadComponent implements OnInit {
  clinics: clinic[] = [];
  services: Department[] = [];
  doctors: Doctor[] = [];
  loading = false;
  error: string | null = null;
  doctorSearch = '';

  readonly whyChooseUs = [
    'HOME.WHY.ITEM_1',
    'HOME.WHY.ITEM_2',
    'HOME.WHY.ITEM_3',
    'HOME.WHY.ITEM_4',
    'HOME.WHY.ITEM_5',
    'HOME.WHY.ITEM_6'
  ];

  readonly testimonials = [
    'HOME.TESTIMONIALS.ITEM_1',
    'HOME.TESTIMONIALS.ITEM_2',
    'HOME.TESTIMONIALS.ITEM_3'
  ];

  readonly yearsOfService = 18;

  constructor(
    private readonly clinicsService: clinicsService,
    private readonly departmentsService: DepartmentsService,
    private readonly doctorsService: DoctorsService
  ) {}

  get featuredServices(): Department[] {
    return this.services.slice(0, 6);
  }

  get featuredDoctors(): Doctor[] {
    const search = this.doctorSearch.trim().toLowerCase();
    const list = search
      ? this.doctors.filter((doctor) => {
          const fullName = (doctor.FullName || '').toLowerCase();
          const specialty = (doctor.Specialty || '').toLowerCase();
          const department = this.departmentName(doctor.DepartmentId).toLowerCase();
          return fullName.includes(search) || specialty.includes(search) || department.includes(search);
        })
      : this.doctors;

    return list.slice(0, 4);
  }

  ngOnInit(): void {
    this.loadHomeData();
  }

  loadHomeData(): void {
    this.loading = true;
    this.error = null;

    forkJoin({
      clinics: this.clinicsService.getAll(),
      services: this.departmentsService.getAll(),
      doctors: this.doctorsService.getAll()
    }).subscribe({
      next: ({ clinics, services, doctors }) => {
        this.clinics = clinics;
        this.services = services;
        this.doctors = doctors;
        this.loading = false;
      },
      error: () => {
        this.error = 'HOME.ERROR.LOAD';
        this.loading = false;
      }
    });
  }

  serviceSlug(item: Department): string {
    return `${item.Id}-${(item.Name || 'service')
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')}`;
  }

  doctorDisplayName(doctor: Doctor): string {
    return doctor.FullName || `Doctor #${doctor.Id}`;
  }

  departmentName(departmentId?: number): string {
    if (!departmentId) {
      return 'HOME.GENERAL';
    }

    const department = this.services.find((item) => item.Id === departmentId);
    return department?.Name ?? 'HOME.NA';
  }
}
