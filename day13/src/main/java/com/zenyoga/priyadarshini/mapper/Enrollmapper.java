package com.zenyoga.priyadarshini.mapper;

import com.zenyoga.priyadarshini.dto.response.Enrolldto;
import com.zenyoga.priyadarshini.entity.Enrollentity;

public class Enrollmapper {

    public static Enrolldto maptoServicedto(Enrollentity enrollentity) {
        // Implement the mapping logic
        return new Enrolldto(
                enrollentity.getId(),
                enrollentity.getName(),
                enrollentity.getEmail(),
                enrollentity.getMobile(),
                enrollentity.getDate(),
                enrollentity.getGender(),
                enrollentity.getAddress(),
                enrollentity.getCity(),
                enrollentity.getRegion(),
                enrollentity.getPostal()
        );
    }

    public static Enrollentity maptoServiceentity(Enrolldto enrolldto) {
        // Implement the mapping logic
        return new Enrollentity(
            enrolldto.getId(),
            enrolldto.getName(),
            enrolldto.getEmail(),
            enrolldto.getMobile(),
            enrolldto.getDate(),
            enrolldto.getGender(),
            enrolldto.getAddress(),
            enrolldto.getCity(),
            enrolldto.getRegion(),
            enrolldto.getPostal()
        );
    }
}

