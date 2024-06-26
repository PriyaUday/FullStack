package com.zenyoga.priyadarshini.mapper;

import com.zenyoga.priyadarshini.dto.response.Academydto;
import com.zenyoga.priyadarshini.entity.Academyentity;

public class Academymapper {

    public static Academydto mapToServiceDto(Academyentity academyEntity) {
        // Implement the mapping logic
        return new Academydto(
                academyEntity.getId(),
                academyEntity.getName(),
                academyEntity.getPlace()
               
        );
    }

    public static Academyentity mapToServiceEntity(Academydto academyDto) {
        // Implement the mapping logic
        return new Academyentity(
            academyDto.getId(),
            academyDto.getName(),
            academyDto.getPlace()
            
        );
    }
}
