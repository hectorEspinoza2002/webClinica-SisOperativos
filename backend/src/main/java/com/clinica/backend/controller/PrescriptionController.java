package com.clinica.backend.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.backend.model.entity.Prescription;
import com.clinica.backend.service.PrescriptionService;

@RestController
@RequestMapping("/recetas")
@CrossOrigin(origins = { "http://localhost:5500", "https://localhost:8080" })
public class PrescriptionController {

    @Autowired
    private PrescriptionService prescriptionService;

    @GetMapping
    public List<Prescription> getAllPrescriptions() {
        return prescriptionService.getAllPrescriptions();
    }

    @GetMapping("/{id}")
    public Prescription getPrescriptionById(@PathVariable Long id) {
        return prescriptionService.getPrescriptionById(id);
    }

    @PostMapping
    public Prescription createPrescription(@RequestBody Prescription request) {
        return prescriptionService.savePrescription(request);
    }

    @PutMapping("/{id}")
    public Prescription updatePrescription(@PathVariable Long id, @RequestBody Prescription prescription) {
        Prescription existing = prescriptionService.getPrescriptionById(id);

        if (existing != null) {
            existing.setDetails(prescription.getDetails());
            existing.setDoctor(prescription.getDoctor());
            existing.setPaciente(prescription.getPaciente());
            existing.setFecha(prescription.getFecha());
            return prescriptionService.savePrescription(existing);
        }
        return null;
    }

    @DeleteMapping("/{id}")
    public void deletePrescription(@PathVariable Long id) {
        prescriptionService.deletePrescription(id);
    }

}
