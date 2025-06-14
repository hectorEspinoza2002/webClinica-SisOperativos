import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Prescription } from '../entity/Prescription';

@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  private apiUrl = 'http://localhost:8080/recetas';

  constructor(private http: HttpClient) { }

  // Obtener todas las recetas
  getAllPrescriptions(): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(this.apiUrl);
  }

  // Obtener una receta por ID
  getPrescriptionById(id: number): Observable<Prescription> {
    return this.http.get<Prescription>(`${this.apiUrl}/${id}`);
  }

  // Crear una nueva receta
  createPrescription(prescription: Prescription): Observable<Prescription> {
    return this.http.post<Prescription>(this.apiUrl, prescription);
  }

  // Actualizar una receta existente
  updatePrescription(id: number, prescription: Prescription): Observable<Prescription> {
    return this.http.put<Prescription>(`${this.apiUrl}/${id}`, prescription);
  }

  // Eliminar una receta
  deletePrescription(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  // Método adicional: Obtener recetas por paciente
  getPrescriptionsByPatient(patientId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/paciente/${patientId}`);
  }

  // Método adicional: Obtener recetas por doctor
  getPrescriptionsByDoctor(doctorId: number): Observable<Prescription[]> {
    return this.http.get<Prescription[]>(`${this.apiUrl}/doctor/${doctorId}`);
  }

}
