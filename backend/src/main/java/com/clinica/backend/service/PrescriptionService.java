package com.clinica.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clinica.backend.model.entity.Prescription;
import com.clinica.backend.model.repository.PrescriptionRepository;

@Service
public class PrescriptionService {

    @Autowired
    private PrescriptionRepository prescriptionRepository;

    public List<Prescription> getAllPrescriptions(){
        return prescriptionRepository.findAll();
    }

    public Prescription getPrescriptionById(Long id){
        return prescriptionRepository.findById(id).orElse(null);
    }

    public Prescription savePrescription(Prescription prescription){
        return prescriptionRepository.save(prescription);
    }

    public void deletePrescription(Long id){
        prescriptionRepository.deleteById(id);
    }

    

}
