package com.zenyoga.priyadarshini.dto.request;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class EnrollRequest {
    private String name;
    private String email;
    private Long mobile;
    private String date;
    private String gender;
    private String address;
    private String city;
    private String region;
    private String postal;
}