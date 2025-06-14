import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../entity/Appointment';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppointmentService {
  constructor(private http: HttpClient) {}
  private url = 'http://localhost:8080/citas';

  /*
  createAppointment(appointmentRequest:any): Observable<any>{
    return this.http.post(`${this.url}/create`,appointmentRequest);
  }
    */

  createAppointment(appointmentData: any): Observable<any> {
    return this.http
      .post(`${this.url}/create`, appointmentData, {
        responseType: 'json', // Fuerza el tipo de respuesta esperada
      })
      .pipe(
        catchError((error) => {
          // Convierte errores de parseo a mensajes legibles
          if (error instanceof HttpErrorResponse) {
            if (error.status === 200 && typeof error.error === 'string') {
              // Maneja el caso donde el backend devuelve string
              return throwError(() => ({
                message: 'Respuesta inesperada del servidor',
                details: error.error,
              }));
            }
          }
          return throwError(() => error);
        })
      );
  }

  getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.url}/doctor/${doctorId}`);
  }

  getAppointmentsByPatient(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.url}/patient/${patientId}`);
  }
}
