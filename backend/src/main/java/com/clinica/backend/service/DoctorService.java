package com.clinica.backend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.clinica.backend.model.entity.Doctor;
import com.clinica.backend.model.repository.DoctorRepository;

@Service
public class DoctorService {

    @Autowired
    private DoctorRepository doctorRepository;

    public List<Doctor> getAllDoctors(){
        return doctorRepository.findAll();
    }

    public Optional<Doctor> getDoctorById(Long id){
        return doctorRepository.findById(id);
    }

    public Doctor saveDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }

    public Doctor createDoctor(Doctor doctor){
        return doctorRepository.save(doctor);
    }
    
    public void deleteDoctor(Long id){
        doctorRepository.deleteById(id);
    }

}
