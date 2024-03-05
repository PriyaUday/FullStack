package com.zenyoga.priyadarshini.mapper;

import com.zenyoga.priyadarshini.dto.response.Coursedto;
import com.zenyoga.priyadarshini.entity.Courseentity;

public class Coursemapper {

    public static Coursedto mapToServiceDto(Courseentity courseEntity) {
        // Implement the mapping logic
        return new Coursedto(
                courseEntity.getId(),
                courseEntity.getName(),
                courseEntity.getDuration(),
                courseEntity.getTimings()
                
        );
    }

    public static Courseentity mapToServiceEntity(Coursedto courseDto) {
        // Implement the mapping logic
        return new Courseentity(
            courseDto.getId(),
            courseDto.getName(),
            courseDto.getDuration(),
            courseDto.getTimings()
            
        );
    }
}
