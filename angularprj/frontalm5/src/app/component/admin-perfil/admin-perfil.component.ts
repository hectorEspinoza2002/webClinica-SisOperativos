import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';
import { Doctor } from '../../entity/Doctor';

@Component({
  selector: 'app-admin-perfil',
  standalone: false,
  templateUrl: './admin-perfil.component.html',
  styleUrl: './admin-perfil.component.css'
})
export class AdminPerfilComponent implements OnInit{

  constructor(private authService: AuthServiceService, private router:Router, private doctorService: DoctorService){}

  doctores: Doctor[] = [];

  ngOnInit(): void {
      this.cargarDoctores();
  }

  cargarDoctores(): void {
    this.doctorService.getAllDoctors().subscribe({
      next: (data) => {
        this.doctores = data;
      },
      error: (err) => {
        console.error("Error al cargar doctores: ",err);
      }
    });
  }

  cerrarSesion(): void {
    this.authService.cerrarSesion();
    this.router.navigate(['/login']);
  }

}
