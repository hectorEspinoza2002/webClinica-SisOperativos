package com.clinica.backend.model.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.backend.model.entity.Appointment;

public interface AppointmentRepository extends JpaRepository <Appointment, Long>{
    List<Appointment> findByDoctorId(Long doctorId);
    List<Appointment> findByPacienteId(Long patientId);
}
