export class Appointment {

  id!: number;
  date: string = '';       // Formato: "YYYY-MM-DD"
  hora: string = '';       // Formato: "HH:MM"
  doctorId?: number;
  patientId?: number;
  status: string = 'Pendiente';
}
