package com.zenyoga.priyadarshini.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.zenyoga.priyadarshini.entity.Contactentity;

@Repository
public interface ContactRepo extends JpaRepository<Contactentity, Long> {

}