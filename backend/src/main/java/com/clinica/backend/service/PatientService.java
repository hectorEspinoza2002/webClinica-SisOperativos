package com.clinica.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clinica.backend.model.entity.Patient;
import com.clinica.backend.model.repository.PatientRepository;

@Service
public class PatientService {

    @Autowired
    private PatientRepository patientRepository;

    public List<Patient> getAllPatients(){
        return patientRepository.findAll();
    }

    public Patient getPatientById(Long id){
        return patientRepository.findById(id).orElse(null);
    }

    public Patient savePatient(Patient patient){
        return patientRepository.save(patient);
    }

    public void deletePatient(Long id){
        patientRepository.deleteById(id);
    }

}
