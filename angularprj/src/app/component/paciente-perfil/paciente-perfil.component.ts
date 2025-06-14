import { Component, OnInit } from '@angular/core';
import { Patient } from '../../entity/Patient';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-perfil',
  standalone: false,
  templateUrl: './paciente-perfil.component.html',
  styleUrl: './paciente-perfil.component.css'
})
export class PacientePerfilComponent implements OnInit{

  paciente: Patient | null = null;

  constructor(private authService: AuthServiceService, private router:Router){}

  ngOnInit(): void {
      this.cargarDatosPaciente();
  }

  cargarDatosPaciente(): void {
    const doctorData = this.authService.obtenerPaciente();

    if(doctorData){
      this.paciente = doctorData;
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
