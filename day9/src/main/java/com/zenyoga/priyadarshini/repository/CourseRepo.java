package com.zenyoga.priyadarshini.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.priyadarshini.entity.Courseentity;

@Repository
public interface CourseRepo extends JpaRepository<Courseentity, Long> {
    Courseentity findByName(String name);
    void deleteByName(String name);
    // Other methods...
}
