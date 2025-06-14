import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { Doctor } from '../../entity/Doctor';

@Component({
  selector: 'app-doctor-perfil',
  standalone: false,
  templateUrl: './doctor-perfil.component.html',
  styleUrl: './doctor-perfil.component.css'
})
export class DoctorPerfilComponent implements OnInit{

  doctor: Doctor | null = null;

  constructor(private authService: AuthServiceService, private router:Router){}

  ngOnInit(): void {
      this.cargarDatosDoctor();
  }

  cargarDatosDoctor(): void {
    const doctorData = this.authService.obtenerDoctor();

    if(doctorData){
      this.doctor = doctorData;
    }
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
