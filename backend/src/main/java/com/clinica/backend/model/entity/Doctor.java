package com.clinica.backend.model.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Doctor {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    private Long id;

    @Column(nullable =  false)
    private String name;

    @Column(nullable =  false)
    private String email;

    @Column(nullable =  false)
    private String password;

    @Column(nullable =  false)
    private String specialty;

    @Column(nullable =  false)
    private String schedule;

}
