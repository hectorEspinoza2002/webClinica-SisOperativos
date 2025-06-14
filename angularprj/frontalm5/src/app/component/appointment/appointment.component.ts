import { AppointmentService } from './../../service/appointment.service';
import { Appointment } from './../../entity/Appointment';
import { Component, OnInit } from '@angular/core';
import { Doctor } from '../../entity/Doctor';
import { Patient } from '../../entity/Patient';
import { DoctorService } from '../../service/doctor.service';
import { PatientService } from '../../service/patient.service';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css',
})
export class AppointmentComponent implements OnInit {
  appointment: Appointment = new Appointment(); // Asegúrate que Appointment tenga propiedad 'hora'
  mensaje: string = '';
  selectedDoctorId!: number;
  doctors: Doctor[] = [];
  actualPaciente: Patient | null = null;

  constructor(
    private appointmentService: AppointmentService,
    private doctorService: DoctorService,
    private patientService: PatientService,
    private authService: AuthServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarActualPaciente();
    this.cargarDoctor();

    const actualUser = this.authService.obtenerUsuarioActual();

    if (actualUser?.tipo === 'patient') {
      this.actualPaciente = actualUser.usuario;
      console.log('Paciente actual: ', this.actualPaciente);
    } else {
      this.mensaje = 'Solo los pacientes pueden agendar citas';
      // this.router.navigate(['/login']);
    }
  }

  cargarActualPaciente(): void {
    this.actualPaciente = this.authService.obtenerPaciente();
    if (!this.actualPaciente) {
      this.mensaje = 'Debe iniciar sesión como paciente para agendar cita';
    }
  }

  cargarDoctor(): void {
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctors = data;
      },
      error: (err) => {
        console.error('Error al obtener los doctores', err);
        this.mensaje = 'Error al cargar la lista de doctores';
      },
    });
  }

  onSubmit() {
    // Validación de campos requeridos
    if (!this.actualPaciente) {
      this.mensaje = 'No se ha identificado al paciente';
      return;
    }

    if (
      !this.appointment.date ||
      !this.appointment.hora ||
      !this.selectedDoctorId
    ) {
      this.mensaje =
        'Por favor complete todos los campos requeridos (fecha, hora y doctor)';
      return;
    }

    // Formatear fecha si es necesario (opcional)
    const fechaFormateada = this.formatDate(this.appointment.date);

    const appointmentRequest = {
      date: fechaFormateada,
      hora: this.appointment.hora,
      doctorId: this.selectedDoctorId,
      pacienteId: this.actualPaciente.id,
    };

    console.log('Datos a enviar:', appointmentRequest); // Para debug

    this.appointmentService.createAppointment(appointmentRequest).subscribe({
      next: (response) => {
        console.log('Respuesta completa:', response);
        if (response && response.message) {
          this.mensaje = response.message;
        } else {
          this.mensaje = 'Cita agendada exitosamente';
        }
        this.resetForm();
      },
      error: (err) => {
        console.error('Error completo:', err);
        if (err.error && err.error.error) {
          this.mensaje = err.error.error;
        } else if (err.message) {
          this.mensaje = err.message;
        } else {
          this.mensaje = 'Error al procesar la respuesta del servidor';
        }
      },
    });
  }

  resetForm(): void {
    this.appointment = new Appointment();
    this.selectedDoctorId = null!;
  }

  // Método opcional para formatear fecha
  private formatDate(dateString: string): string {
    try {
      const dateObj = new Date(dateString);
      return dateObj.toISOString().split('T')[0]; // Formato YYYY-MM-DD
    } catch (e) {
      return dateString; // Si falla, devolver el string original
    }
  }

  cerrarSesion(): void {
    this.router.navigate(['/pacientePerfil']);
  }

}
