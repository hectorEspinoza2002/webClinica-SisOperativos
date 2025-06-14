import { HttpClient } from '@angular/common/http';
import { errorContext } from 'rxjs/internal/util/errorContext';
import { AuthServiceService } from './../../service/auth-service.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(
    private http: HttpClient,
    private authServiceService: AuthServiceService,
    private router: Router
  ) {}

  login(): void {
    this.authServiceService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        const tipoUsuario = response.tipo;
        const usuario = response.usuario;

        // Verifica que el usuario tenga ID
        if (!usuario.id) {
          this.errorMessage = 'Datos de usuario incompletos';
          return;
        }

        this.authServiceService.guardarUsuario(usuario, tipoUsuario);

        // Debug: verifica lo que se guardó
        console.log('Usuario guardado:', usuario);
        console.log('Tipo de usuario:', tipoUsuario);

        switch (tipoUsuario) {
          case 'admin':
            this.router.navigate(['/adminPerfil']);
            break;
          case 'doctor':
            this.router.navigate(['/doctorPerfil']);
            break;
          case 'patient':
            this.router.navigate(['/pacientePerfil']);
            break;
          default:
            this.errorMessage = 'Tipo de usuario no reconocido';
        }
      },
      error: (err) => {
        console.error('Error en login', err);
        this.errorMessage = 'Correo o contraseña incorrectos.';
      },
    });
  }

  registrarPaciente(): void {
    this.router.navigate(['/registro-paciente']);
  }
}
