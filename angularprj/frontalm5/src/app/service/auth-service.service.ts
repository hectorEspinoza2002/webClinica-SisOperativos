import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../entity/Doctor';
import { Patient } from '../entity/Patient';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:8080/auth';

  // Método genérico para login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.url}/login`, {email, password});
  }

  // Guardar datos del usuario según su rol
  /*
  guardarUsuario(usuario: any, tipo: string) {
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('tipoUsuario', tipo);
  }
  */

  guardarUsuario(usuario:any, tipo: string): void {
    localStorage.setItem('urrentUser', JSON.stringify({
      tipo, usuario
    }));

    if(tipo == 'patient'){
      localStorage.setItem('patient', JSON.stringify(usuario));
    } else if( tipo == 'doctor'){
      localStorage.setItem('doctor', JSON.stringify(usuario));
    }
  }

  obtenerPaciente(): Patient | null {
    const pacienteData = localStorage.getItem('patient');
    return pacienteData ? JSON.parse(pacienteData) : null;
  }

  obtenerDoctor(): Doctor | null {
    const docData = localStorage.getItem('doctor');
    return docData ? JSON.parse(docData) : null;
  }

  obtenerUsuarioActual(): {tipo : string, usuario: any} | null {
    const userData = localStorage.getItem('currentUser');
    return userData ? JSON.parse(userData) : null;
  }

  registrarPaciente(patient: Patient): Observable<any> {
    return this.http.post(`${this.url}/register-patient`, patient);
  }

  obtenerUsuario() {
    const data = localStorage.getItem('usuario');
    return data ? JSON.parse(data) : null;
  }

  obtenerTipoUsuario() {
    return localStorage.getItem('tipoUsuario');
  }

  cerrarSesion() {
    localStorage.removeItem('usuario');
    localStorage.removeItem('tipoUsuario');
  }

  estarLogueado(): boolean {
    return !!localStorage.getItem('usuario');
  }

  registerDoctor(doctor: Doctor): Observable<any> {
    return this.http.post(`${this.url}/auth/register_doctor`, doctor);
  }





}
