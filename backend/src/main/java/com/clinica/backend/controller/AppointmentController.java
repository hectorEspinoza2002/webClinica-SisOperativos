package com.clinica.backend.controller;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.backend.model.entity.Appointment;
import com.clinica.backend.model.entity.Doctor;
import com.clinica.backend.model.entity.Patient;
import com.clinica.backend.model.repository.AppointmentRepository;
import com.clinica.backend.model.repository.DoctorRepository;
import com.clinica.backend.model.repository.PatientRepository;

import lombok.Data;

@RestController
@RequestMapping("/citas")
@CrossOrigin(origins = { "http://localhost:5500", "https://localhost:8080" })
public class AppointmentController {

    @Autowired
    private AppointmentRepository appointmentRepository;

    @Autowired
    private DoctorRepository doctorRepository;

    @Autowired
    private PatientRepository patientRepository;

    @PostMapping("/create")
    public ResponseEntity<Map<String, String>> createAppointment(@RequestBody Map<String, Object> request) {
        try {
            System.out.println("Request completo recibido: " + request.toString());

            // Validar campos requeridos
            if (request.get("date") == null || request.get("hora") == null ||
                    request.get("doctorId") == null || request.get("pacienteId") == null) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Todos los campos son requeridos");
                return ResponseEntity.badRequest().body(errorResponse);
            }

            // Obtener fecha y hora
            String fecha = request.get("date").toString();
            String hora = request.get("hora").toString();

            // Validar formatos básicos
            if (!fecha.matches("\\d{4}-\\d{2}-\\d{2}")) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Formato de fecha inválido. Use YYYY-MM-DD");
                return ResponseEntity.badRequest().body(errorResponse);
            }

            if (!hora.matches("\\d{2}:\\d{2}")) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Formato de hora inválido. Use HH:MM");
                return ResponseEntity.badRequest().body(errorResponse);
            }

            // Convertir IDs
            Long doctorId;
            Long pacienteId;
            try {
                doctorId = Long.valueOf(request.get("doctorId").toString());
                pacienteId = Long.valueOf(request.get("pacienteId").toString());
            } catch (NumberFormatException e) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "IDs de doctor o paciente inválidos");
                return ResponseEntity.badRequest().body(errorResponse);
            }

            // Buscar doctor y paciente
            Optional<Doctor> doctorOpt = doctorRepository.findById(doctorId);
            Optional<Patient> patientOpt = patientRepository.findById(pacienteId);

            if (doctorOpt.isEmpty() || patientOpt.isEmpty()) {
                Map<String, String> errorResponse = new HashMap<>();
                errorResponse.put("error", "Doctor o paciente no encontrados");
                return ResponseEntity.badRequest().body(errorResponse);
            }

            // Crear y guardar cita
            Appointment appointment = new Appointment();
            appointment.setDate(fecha);
            appointment.setHora(hora);
            appointment.setDoctor(doctorOpt.get());
            appointment.setPaciente(patientOpt.get());
            appointment.setStatus("Pendiente");

            Appointment savedAppointment = appointmentRepository.save(appointment);

            // Respuesta de éxito
            Map<String, String> response = new HashMap<>();
            response.put("message", "Cita registrada correctamente");
            response.put("id", savedAppointment.getId().toString());
            response.put("date", savedAppointment.getDate());
            response.put("hora", savedAppointment.getHora());
            response.put("doctor", doctorOpt.get().getName());
            response.put("paciente", patientOpt.get().getNombre());

            return ResponseEntity.ok(response);

        } catch (Exception e) {
            e.printStackTrace();
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Error al crear cita: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(errorResponse);
        }
    }

    @GetMapping("/doctor/{id}")
    public List<Appointment> getAppointmentsByDoctor(@PathVariable Long id) {
        return appointmentRepository.findByDoctorId(id);
    }

    @GetMapping("/patient/{id}")
    public List<Appointment> getAppointmentsByPatient(@PathVariable Long id) {
        return appointmentRepository.findByPacienteId(id);
    }

    @Data
    public static class AppointmentRequest {
        private LocalDateTime date;
        private Long doctorId;
        private Long patientId;
    }

}
