package com.clinica.backend.model.entity;

//import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class Appointment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    //@Column(nullable =  false)
    private String date;

    private String hora;

    @ManyToOne
    @JoinColumn(name = "paciente_id")
    private Patient paciente;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    //@Column(nullable =  false)
    private String status;

}
