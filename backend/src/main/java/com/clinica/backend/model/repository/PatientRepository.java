package com.clinica.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.backend.model.entity.Patient;

public interface PatientRepository extends JpaRepository <Patient, Long>{
    Patient findByEmail(String email);

}
