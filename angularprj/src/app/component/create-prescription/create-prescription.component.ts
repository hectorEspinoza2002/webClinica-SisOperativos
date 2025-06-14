import { Component, OnInit } from '@angular/core';
import { Prescription } from '../../entity/Prescription';
import { Patient } from '../../entity/Patient';
import { PrescriptionService } from '../../service/prescription.service';
import { PatientService } from '../../service/patient.service';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-prescription',
  standalone: false,
  templateUrl: './create-prescription.component.html',
  styleUrl: './create-prescription.component.css',
})
export class CreatePrescriptionComponent implements OnInit {
  prescription: Prescription = new Prescription();
  patients: Patient[] = [];
  currentDoctorId?: number;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private prescriptionService: PrescriptionService,
    private patientService: PatientService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadCurrentDoctor();
    this.loadPatients();
  }

  loadCurrentDoctor(): void {
    const doctorData = this.authService.obtenerDoctor();
    if (doctorData) {
      this.currentDoctorId = doctorData.id;
    }
  }

  loadPatients(): void {
    this.patientService.getAllPatients().subscribe({
      next: (data) => {
        this.patients = data;
      },
      error: (err) => {
        console.error('Error al cargar pacientes', err);
        this.errorMessage = 'Error al cargar la lista de pacientes';
      },
    });
  }

  onSubmit(): void {
    if (!this.currentDoctorId || !this.prescription.patientId) {
      this.errorMessage = 'Por favor complete todos los campos';
      return;
    }

    const patientId = Number(this.prescription.patientId);
    if(isNaN(patientId)){
      this.errorMessage = "ID de paciente invalido";
      return;
    }

    // Crear objeto para enviar al backend
    const prescriptionToSend = {
      details: this.prescription.details,
      doctorId: this.currentDoctorId, // Usar el ID directamente
      patientId: patientId,
      fecha:
        this.prescription.fecha || new Date().toISOString().split('T')[0],
    };

    console.log('Enviando receta:', prescriptionToSend); // Para debug

    this.prescriptionService.createPrescription(prescriptionToSend).subscribe({
      next: (createdPrescription) => {
        this.successMessage = 'Receta creada exitosamente';
        this.prescription = new Prescription();
        setTimeout(() => this.router.navigate(['/doctorPerfil']), 2000);
      },
      error: (err) => {
        console.error('Error completo:', err);
        this.errorMessage =
          'Error al crear la receta: ' +
          (err.error?.message || 'Verifique los datos');
      },
    });

  }
}
