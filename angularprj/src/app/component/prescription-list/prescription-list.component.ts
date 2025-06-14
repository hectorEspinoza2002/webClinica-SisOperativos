import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../entity/Prescription';
import { PrescriptionService } from '../../service/prescription.service';
import { AuthServiceService } from '../../service/auth-service.service';

@Component({
  selector: 'app-prescription-list',
  standalone: false,
  templateUrl: './prescription-list.component.html',
  styleUrl: './prescription-list.component.css'
})
export class PrescriptionListComponent implements OnInit{

  prescriptions: Prescription[] = [];
  currentPatientId?: number;

  constructor(
    private prescriptionService: PrescriptionService,
    private authService: AuthServiceService
  ) {}

  ngOnInit(): void {
    this.loadCurrentPatient();
    this.loadPrescriptions();
  }

  loadCurrentPatient(): void {
    const currentUser = this.authService.obtenerUsuarioActual();
    if (currentUser?.tipo === 'patient') {
      this.currentPatientId = currentUser.usuario.id;
    }
  }

  loadPrescriptions(): void {
    if (this.currentPatientId) {
      this.prescriptionService.getPrescriptionsByPatient(this.currentPatientId).subscribe({
        next: (data) => {
          this.prescriptions = data;
        },
        error: (err) => {
          console.error('Error al cargar recetas:', err);
        }
      });
    }
  }
/*
  createNewPrescription(): void {
    const newPrescription: Prescription = {
      details: 'Tomar 1 pastilla cada 8 horas',
      doctor: { id: 1 }, // ID del doctor que prescribe
      patient: { id: this.currentPatientId || 0 },
      fecha: new Date().toISOString()
    };

    this.prescriptionService.createPrescription(newPrescription).subscribe({
      next: (createdPrescription) => {
        console.log('Receta creada:', createdPrescription);
        this.loadPrescriptions(); // Recargar la lista
      },
      error: (err) => {
        console.error('Error al crear receta:', err);
      }
    });
  }
    */

  createNewPrescription(): void {}

}
