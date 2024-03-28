package com.zenyoga.madhumitha.dto.response;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Coursedto {
    private Long id;
    private String name;
    private String duration;
    private String timings;
    private Long academyId;
    // private String desc;
    
}