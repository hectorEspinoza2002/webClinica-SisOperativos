package com.clinica.backend.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.clinica.backend.model.entity.User;

public interface UserRepository  extends JpaRepository<User, Long>{
    User findByEmail(String email);
}
