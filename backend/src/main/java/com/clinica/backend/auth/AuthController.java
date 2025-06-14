 /*
package com.clinica.backend.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.clinica.backend.model.entity.Doctor;
import com.clinica.backend.model.repository.DoctorRepository;

@RestController
@RequestMapping("/auth")
public class AuthController {

     @Autowired
     private DoctorRepository doctorRepository;

     @Autowired
     private JwtUtil jwtUtil;

     @PostMapping("/login")
     public String login(@RequestBody UserLoginRequest loginRequest){
        Doctor doctor = doctorRepository.findByEmail(loginRequest.getEmail());

        if (doctor != null && doctor.getPassword().equals(loginRequest.getPassword())) {
            return jwtUtil.generateToken(doctor.getEmail(), "DOCTOR");
        } else {
            throw new RuntimeException("Credenciales inválidas");
        }
     }

}
 */