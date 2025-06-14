package com.clinica.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.backend.model.entity.Patient;
import com.clinica.backend.service.PatientService;

@RestController
@RequestMapping("/patients")
@CrossOrigin(origins = {"http://localhost:5500", "https://localhost:8080"})
public class PatientController {

    @Autowired
    private PatientService patientService;

    @GetMapping("/all")
    public List<Patient> getAllPatients(){
        return patientService.getAllPatients();
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable Long id){
        return patientService.getPatientById(id);
    }

    @PostMapping
    public Patient createPatient(@RequestBody Patient patient){
        return patientService.savePatient(patient);
    }

    @DeleteMapping("/{id}")
    public void deletePatient(@PathVariable Long id){
        patientService.deletePatient(id);
    }

}
