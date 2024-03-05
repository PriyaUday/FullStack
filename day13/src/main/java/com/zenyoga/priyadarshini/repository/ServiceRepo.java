package com.zenyoga.priyadarshini.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.priyadarshini.entity.Serviceentity;

@Repository
public interface ServiceRepo extends JpaRepository<Serviceentity, Long> {
    Serviceentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
