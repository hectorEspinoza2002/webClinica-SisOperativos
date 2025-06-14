import { AuthServiceService } from './../../service/auth-service.service';
import { Component } from '@angular/core';
import { Doctor } from '../../entity/Doctor';
import { Router } from '@angular/router';
import { DoctorService } from '../../service/doctor.service';

@Component({
  selector: 'app-register-doctor',
  standalone: false,
  templateUrl: './register-doctor.component.html',
  styleUrl: './register-doctor.component.css'
})
export class RegisterDoctorComponent {

  doctor: Doctor = new Doctor();
  mensaje: string = "";

  constructor(private authService:DoctorService, private router:Router){}

  register(){
    this.authService.registerDoctor(this.doctor).subscribe({
      next: (res) => {
        this.mensaje = "Doctor registrado correctamente";
        this.router.navigate(['/adminPerfil']);
      },
      error: (erro) => {
        console.error("Error: ", erro);
        this.mensaje = erro.erro;
      }
    });
  }

}
