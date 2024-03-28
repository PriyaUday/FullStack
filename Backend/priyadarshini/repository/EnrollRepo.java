package com.zenyoga.madhumitha.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.madhumitha.model.Enrollentity;

@Repository
public interface EnrollRepo extends JpaRepository<Enrollentity, Long> {
    
    
     Enrollentity findByName(String name);
     Enrollentity findByEmail(String email);
    void deleteByName(String name);
    // Other methods...
}
