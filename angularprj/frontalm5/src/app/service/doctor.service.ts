import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../entity/Doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:8080';

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/doctors/all`);
  }

  registerDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(`${this.baseUrl}/doctors`, doctor);
  }
}
