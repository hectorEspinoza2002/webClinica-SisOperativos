import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../entity/Appointment';
import { Observable } from 'rxjs';
import { AppointmentRequest } from '../entity/AppointmentRequest';

@Injectable({
  providedIn: 'root'
})
export class AppointmentRequestService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/citas';

  createAppointment(appointment:AppointmentRequest): Observable<any>{
    return this.http.post(`${this.url}/create`,appointment);
  }

  getAppointmentsByDoctor(doctorId: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/doctor/${doctorId}`);
  }

  getAppointmentsByPatient(patientId: number): Observable<Appointment[]>{
    return this.http.get<Appointment[]>(`${this.url}/patient/${patientId}`);
  }
}
