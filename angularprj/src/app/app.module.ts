import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import { DoctorPerfilComponent } from './component/doctor-perfil/doctor-perfil.component';
import { RegisterDoctorComponent } from './component/register-doctor/register-doctor.component';
import { AppointmentComponent } from './component/appointment/appointment.component';
import { RegisterPacienteComponent } from './component/register-paciente/register-paciente.component';
import { AdminPerfilComponent } from './component/admin-perfil/admin-perfil.component';
import { PacientePerfilComponent } from './component/paciente-perfil/paciente-perfil.component';
import { PrescriptionListComponent } from './component/prescription-list/prescription-list.component';
import { CreatePrescriptionComponent } from './component/create-prescription/create-prescription.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DoctorPerfilComponent,
    RegisterDoctorComponent,
    AppointmentComponent,
    RegisterPacienteComponent,
    AdminPerfilComponent,
    PacientePerfilComponent,
    PrescriptionListComponent,
    CreatePrescriptionComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
