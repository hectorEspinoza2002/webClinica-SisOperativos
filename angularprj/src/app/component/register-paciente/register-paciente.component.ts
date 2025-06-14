import { Component } from '@angular/core';
import { Patient } from '../../entity/Patient';
import { AuthServiceService } from '../../service/auth-service.service';
import { Router } from '@angular/router';
import { PatientService } from '../../service/patient.service';

@Component({
  selector: 'app-register-paciente',
  standalone: false,
  templateUrl: './register-paciente.component.html',
  styleUrl: './register-paciente.component.css'
})
export class RegisterPacienteComponent {

  paciente: Patient = new Patient();
  mensaje: string = "";

  constructor(private pacienteService:PatientService, private router:Router){}

  register(){
    this.pacienteService.registerPatients(this.paciente).subscribe({
      next: (res) => {
          this.mensaje = "Doctor registrado correctamente";
          this.router.navigate(['/login']);
      },
      error: (erro) => {
          console.error("Error: ", erro);
          this.mensaje = erro.erro;
      }
    });
    }
}
