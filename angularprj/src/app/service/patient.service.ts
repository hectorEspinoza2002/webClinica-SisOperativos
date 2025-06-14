import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patient } from '../entity/Patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';

    getAllPatients(): Observable<Patient[]> {
      return this.http.get<Patient[]>(`${this.baseUrl}/patients/all`);
    }

    registerPatients(paciente: Patient): Observable<any> {
        return this.http.post(`${this.baseUrl}/patients`, paciente);
      }

}
