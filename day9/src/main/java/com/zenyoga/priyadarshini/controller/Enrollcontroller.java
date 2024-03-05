package com.zenyoga.priyadarshini.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.priyadarshini.dto.response.Enrolldto;
import com.zenyoga.priyadarshini.service.Enrollservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;
@RequestMapping("/enroll")
@CrossOrigin(origins="*")
@Tag(name= "Enroll Course", description="Enroll Course CRUD Operations")
@RestController

public class Enrollcontroller {

    private final Enrollservice enrollservice;

    public Enrollcontroller(Enrollservice enrollservice) {
        this.enrollservice = enrollservice;
    }
    // @Tag(name="Get",description="Listing the details")
    @Transactional
    @GetMapping
    public ResponseEntity<List<Enrolldto>> getAllServices() {
        List<Enrolldto> services = enrollservice.getAllServices();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    // @Tag(name="Get",description="Listing the details by their name")
    @Transactional
    @GetMapping("/{name}")
    public ResponseEntity<Enrolldto> getServiceByName(@PathVariable String name) {
        Enrolldto service = enrollservice.getServiceByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Tag(name="Post ",description="Adding details")
    @Transactional
    @PostMapping
    public ResponseEntity<Enrolldto> createService(@RequestBody Enrolldto service) {
        Enrolldto createdService = enrollservice.createService(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    // @Tag(name="Update ",description="Updating details by name")
    @Transactional
    @PutMapping("/{name}")
    public ResponseEntity<Enrolldto> updateServiceByName(@PathVariable String name, @RequestBody Enrolldto updatedService) {
        Enrolldto updatedServiceDto = enrollservice.updateServiceByName(name, updatedService);
        if (updatedServiceDto != null) {
            return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Tag(name="Delete",description="Deleting details by name")
    @Transactional
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
        enrollservice.deleteServiceByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

