package com.zenyoga.priyadarshini.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.priyadarshini.entity.Enrollentity;

@Repository
public interface EnrollRepo extends JpaRepository<Enrollentity, Long> {
    static Enrollentity findByName(String name) {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'findByName'");
    }
    void deleteByName(String name);
    // Other methods...
}
