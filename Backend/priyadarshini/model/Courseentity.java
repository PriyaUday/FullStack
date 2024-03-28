package com.zenyoga.madhumitha.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "CoursesForm")
public class Courseentity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "Name",nullable = false)              
    private String name;

    @Column(name = "Duration",nullable = false)
    private String duration;

   

    @Column(name = "Timings",nullable = false)
    private String timings;
    // @Column(name = "Desc",nullable = false)
    // private String desc;
   
    @Column(name = "Academy_Id", nullable = false) // Added field
    private Long academyId;

     
   
}