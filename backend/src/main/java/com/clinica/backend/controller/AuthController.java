package com.clinica.backend.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.backend.model.entity.Doctor;
import com.clinica.backend.model.entity.LoginRequest;
import com.clinica.backend.model.entity.Patient;
import com.clinica.backend.model.entity.User;
import com.clinica.backend.model.repository.DoctorRepository;
import com.clinica.backend.model.repository.PatientRepository;
import com.clinica.backend.model.repository.UserRepository;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = { "http://localhost:5500", "https://localhost:8080" })
public class AuthController {

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // Buscar en admins
        User admin = userRepository.findByEmail(loginRequest.getEmail());
        if (admin != null && admin.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(Map.of(
                    "tipo", "admin",
                    "usuario", admin));
        }

        // Buscar en doctores
        Doctor doctor = doctorRepository.findByEmail(loginRequest.getEmail());
        if (doctor != null && doctor.getPassword().equals(loginRequest.getPassword())) {
            return ResponseEntity.ok(Map.of(
                    "tipo", "doctor",
                    "usuario", doctor));
        }

        Patient paciente = patientRepository.findByEmail(loginRequest.getEmail());
        if (paciente != null && paciente.getPassword().equals(loginRequest.getPassword())) {
            Map<String, Object> response = new HashMap<>();
            response.put("tipo", "patient");
            response.put("usuario", paciente); // Asegúrate que paciente tiene su ID

            return ResponseEntity.ok(response);
        }

        /*
         * // Buscar en pacientes
         * Patient patient = patientRepository.findByEmail(loginRequest.getEmail());
         * if (patient != null &&
         * patient.getPassword().equals(loginRequest.getPassword())) {
         * return ResponseEntity.ok(Map.of(
         * "tipo", "patient",
         * "usuario", patient
         * ));
         * }
         */

        return ResponseEntity.status(401).body("Credenciales incorrectas");
    }

    @PostMapping("/register-patient")
    public Patient registerPatient(@RequestBody Patient patient) {
        return patientRepository.save(patient);
    }

    @PostMapping("/register-doctor")
    public Doctor registerDoctor(@RequestBody Doctor doctor) {
        return doctorRepository.save(doctor);
    }

}
