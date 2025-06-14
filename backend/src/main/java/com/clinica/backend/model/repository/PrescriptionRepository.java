package com.clinica.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.backend.model.entity.Prescription;

public interface PrescriptionRepository extends JpaRepository <Prescription, Long>{

}
