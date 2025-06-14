import { CreatePrescriptionComponent } from './component/create-prescription/create-prescription.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { DoctorPerfilComponent } from './component/doctor-perfil/doctor-perfil.component';
import { RegisterDoctorComponent } from './component/register-doctor/register-doctor.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { RegisterPacienteComponent } from './component/register-paciente/register-paciente.component';
import { AdminPerfilComponent } from './component/admin-perfil/admin-perfil.component';
import { PacientePerfilComponent } from './component/paciente-perfil/paciente-perfil.component';
import { PrescriptionListComponent } from './component/prescription-list/prescription-list.component';

const routes: Routes = [
  {
    path: "login", component: LoginComponent
  },
  {
    path: "", redirectTo: "login", pathMatch: "full"
  },
  {
    path: "doctorPerfil", component: DoctorPerfilComponent
  },
  {
    path: "registro-doctor", component: RegisterDoctorComponent
  },
  {
    path: "agenda-cita", component: AppointmentComponent
  },
  {
    path: "registro-paciente", component: RegisterPacienteComponent
  },
  {
    path: "adminPerfil", component: AdminPerfilComponent
  },
  {
    path: "pacientePerfil", component: PacientePerfilComponent
  },
  {
    path: "recetas", component: PrescriptionListComponent
  },
  {
    path: "crear-recetas", component: CreatePrescriptionComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
