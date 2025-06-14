package com.clinica.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.backend.model.entity.Doctor;

public interface DoctorRepository extends JpaRepository <Doctor, Long>{
    Doctor findByEmail(String email);
}
