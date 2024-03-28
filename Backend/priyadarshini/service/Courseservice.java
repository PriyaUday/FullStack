// // // Courseservice.java
// // package com.zenyoga.madhumitha.service;

// // import java.util.List;
// // import java.util.stream.Collectors;

// // import org.springframework.stereotype.Service;

// // import com.zenyoga.madhumitha.dto.response.Coursedto;
// // import com.zenyoga.madhumitha.mapper.Coursemapper;
// // import com.zenyoga.madhumitha.model.Courseentity;
// // import com.zenyoga.madhumitha.repository.CourseRepo;

// // @Service
// // public class Courseservice {

// //     private final CourseRepo courseRepo;

// //     public Courseservice(CourseRepo courseRepo) {
// //         this.courseRepo = courseRepo;
// //     }

// //     public List<Coursedto> getAllCourses() {
// //         List<Courseentity> courses = courseRepo.findAll();
// //         return courses.stream()
// //                 .map(Coursemapper::mapToServiceDto)
// //                 .collect(Collectors.toList());
// //     }

// //     public List<Coursedto> getAllCoursesByAcademy(Long academyId) {
// //         List<Courseentity> courses = courseRepo.findByAcademyId(academyId);
// //         return courses.stream()
// //                 .map(Coursemapper::mapToServiceDto)
// //                 .collect(Collectors.toList());
// //     }

// //     public Coursedto getCourseByName(String name) {
// //         Courseentity courseEntity = courseRepo.findByName(name);
// //         return Coursemapper.mapToServiceDto(courseEntity);
// //     }

// //     public Coursedto createCourse(Coursedto courseDto) {
// //         Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);
// //         courseEntity = courseRepo.save(courseEntity);
// //         return Coursemapper.mapToServiceDto(courseEntity);
// //     }

// //     public Coursedto updateCourseByName(String name, Coursedto updatedCourseDto) {
// //         Courseentity existingCourse = courseRepo.findByName(name);

// //         if (existingCourse != null) {
// //             // Update the fields you want to allow updating
// //             existingCourse.setDuration(updatedCourseDto.getDuration());
// //             existingCourse.setTimings(updatedCourseDto.getTimings());

// //             existingCourse = courseRepo.save(existingCourse);
// //             return Coursemapper.mapToServiceDto(existingCourse);
// //         } else {
// //             // Handle not found scenario
// //             return null;
// //         }
// //     }

// //     public void deleteCourseByName(String name) {
// //         courseRepo.deleteByName(name);
// //     }
// // }
// // Updated Courseservice.java
// package com.zenyoga.madhumitha.service;

// import java.util.List;
// import java.util.Optional;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.mapper.Academymapper;
// import com.zenyoga.madhumitha.mapper.Coursemapper;
// import com.zenyoga.madhumitha.model.Courseentity;
// import com.zenyoga.madhumitha.repository.CourseRepo;

// @Service
// public class Courseservice {

//     private final CourseRepo courseRepo;

//     public Courseservice(CourseRepo courseRepo) {
//         this.courseRepo = courseRepo;
//     }

//     public List<Coursedto> getAllCourses() {
//         List<Courseentity> courses = courseRepo.findAll();
//         return courses.stream()
//                 .map(Coursemapper::mapToServiceDto)
//                 .collect(Collectors.toList());
//     }

//     public List<Coursedto> getAllCoursesByAcademy(Long academyId) {
//         List<Courseentity> courses = courseRepo.findByAcademyId(academyId);
//         return courses.stream()
//                 .map(Coursemapper::mapToServiceDto)
//                 .collect(Collectors.toList());
//     }

//     public Optional<Coursedto> getCourseByName(String name) {
//         Courseentity courseEntity = courseRepo.findByName(name);
//         return Optional.ofNullable(Coursemapper.mapToServiceDto(courseEntity));
//     }

//     public Coursedto createCourse(Coursedto courseDto) {
//         Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);

//         // Set the Academyentity reference in the Courseentity
//         courseEntity.setAcademy(Academymapper.mapToServiceEntity(courseDto.getAcademy()));

//         courseEntity = courseRepo.save(courseEntity);
//         return Coursemapper.mapToServiceDto(courseEntity);
//     }

//     public Optional<Coursedto> updateCourseByName(String name, Coursedto updatedCourseDto) {
//         Courseentity existingCourse = courseRepo.findByName(name);

//         return Optional.ofNullable(existingCourse).map(course -> {
//             // Update the fields you want to allow updating
//             course.setDuration(updatedCourseDto.getDuration());
//             course.setTimings(updatedCourseDto.getTimings());

//             course = courseRepo.save(course);
//             return Coursemapper.mapToServiceDto(course);
//         });
//     }

//     public void deleteCourseByName(String name) {
//         courseRepo.deleteByName(name);
//     }
// }
// Courseservice.java (Service for handling course-related operations)
// package com.zenyoga.madhumitha.service;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.mapper.Coursemapper;
// import com.zenyoga.madhumitha.model.Courseentity;
// import com.zenyoga.madhumitha.repository.CourseRepo;

// @Service
// public class Courseservice {

//     private final CourseRepo courseRepo;

//     public Courseservice(CourseRepo courseRepo) {
//         this.courseRepo = courseRepo;
//     }

//     public List<Coursedto> getAllCourses() {
//         List<Courseentity> courses = courseRepo.findAll();
//         return courses.stream()
//                 .map(Coursemapper::mapToServiceDto)
//                 .collect(Collectors.toList());
//     }

//     public Coursedto getCourseByName(String name) {
//         Courseentity courseEntity = courseRepo.findByName(name);
//         return Coursemapper.mapToServiceDto(courseEntity);
//     }

//     public Coursedto createCourse(Coursedto courseDto) {
//         Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);
//         courseEntity = courseRepo.save(courseEntity);
//         return Coursemapper.mapToServiceDto(courseEntity);
//     }

//     public Coursedto updateCourseByName(String name, Coursedto updatedCourseDto) {
//         Courseentity existingCourse = courseRepo.findByName(name);

//         if (existingCourse != null) {
//             // Update the fields you want to allow updating
//             existingCourse.setDuration(updatedCourseDto.getDuration());
//             existingCourse.setTimings(updatedCourseDto.getTimings());
           
//             existingCourse = courseRepo.save(existingCourse);
//             return Coursemapper.mapToServiceDto(existingCourse);
//         } else {
//             // Handle not found scenario
//             return null;
//         }
//     }

//     public void deleteCourseByName(String name) {
//         courseRepo.deleteByName(name);
//     }

   
// }

// package com.zenyoga.madhumitha.service;

// import java.util.List;
// import java.util.stream.Collectors;

// import org.springframework.stereotype.Service;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.mapper.Coursemapper;
// import com.zenyoga.madhumitha.model.Courseentity;
// import com.zenyoga.madhumitha.repository.AcademyRepo;
// import com.zenyoga.madhumitha.repository.CourseRepo;

// @Service
// public class Courseservice {

//     private final CourseRepo courseRepo;
//     private final AcademyRepo academyRepo;
//     public Courseservice(CourseRepo courseRepo, AcademyRepo academyRepo) {
//         this.courseRepo = courseRepo;
//         this.academyRepo = academyRepo;
//     }

//     public List<Coursedto> getAllCourses() {
//         List<Courseentity> courses = courseRepo.findAll();
//         return courses.stream()
//                 .map(Coursemapper::mapToServiceDto)
//                 .collect(Collectors.toList());
//     }

//     public Coursedto getCourseByName(String name) {
//         Courseentity courseEntity = courseRepo.findByName(name);
//         return Coursemapper.mapToServiceDto(courseEntity);
//     }

//     public Coursedto createCourse(Coursedto courseDto) {
//         Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);
//         courseEntity = courseRepo.save(courseEntity);
//         return Coursemapper.mapToServiceDto(courseEntity);
//     }

//     public Coursedto updateCourseByName(String name, Coursedto updatedCourseDto) {
//         Courseentity existingCourse = courseRepo.findByName(name);

//         if (existingCourse != null) {
//             // Update the fields you want to allow updating
//             existingCourse.setDuration(updatedCourseDto.getDuration());
//             existingCourse.setTimings(updatedCourseDto.getTimings());
           
//             existingCourse = courseRepo.save(existingCourse);
//             return Coursemapper.mapToServiceDto(existingCourse);
//         } else {
//             // Handle not found scenario
//             return null;
//         }
//     }

//     public void deleteCourseByName(String name) {
//         courseRepo.deleteByName(name);
//     }

//     // Add this method to Courseservice.java
   


   
// }

package com.zenyoga.madhumitha.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.dto.response.Coursedto;
import com.zenyoga.madhumitha.mapper.Coursemapper;
import com.zenyoga.madhumitha.model.Courseentity;
import com.zenyoga.madhumitha.repository.CourseRepo;

@Service
public class Courseservice {

    private final CourseRepo courseRepo;

    public Courseservice(CourseRepo courseRepo) {
        this.courseRepo = courseRepo;
    }

    public List<Coursedto> getAllCourses() {
        List<Courseentity> courses = courseRepo.findAll();
        return courses.stream()
                .map(Coursemapper::mapToServiceDto)
                .collect(Collectors.toList());
    }

    public Coursedto getCourseByName(String name) {
        Courseentity courseEntity = courseRepo.findByName(name);
        return Coursemapper.mapToServiceDto(courseEntity);
    }
    public List<Coursedto> getCoursesByAcademyId(Long academyId) {
        List<Courseentity> courses = courseRepo.findByAcademyId(academyId);
        List<Coursedto> courseDtos = courses.stream()
                .map(courseEntity -> Coursemapper.mapToServiceDto(courseEntity))
                .collect(Collectors.toList());
        return courseDtos;
    }
    // public List<Coursedto> getCoursesByAcademyId(Long academyId) {
    //     List<Courseentity> courses = courseRepo.findByAcademyId(academyId);
    //     return courses.stream()
    //             .map(Coursemapper::mapToServiceDto)
    //             .collect(Collectors.toList());
    // }
    public Coursedto createCourse(Coursedto courseDto) {
        Courseentity courseEntity = Coursemapper.mapToServiceEntity(courseDto);
        courseEntity = courseRepo.save(courseEntity);
        return Coursemapper.mapToServiceDto(courseEntity);
    }

    public Coursedto updateCourseByName(String name, Coursedto updatedCourseDto) {
        Courseentity existingCourse = courseRepo.findByName(name);

        if (existingCourse != null) {
            // Update the fields you want to allow updating
            existingCourse.setDuration(updatedCourseDto.getDuration());
            existingCourse.setTimings(updatedCourseDto.getTimings());
            existingCourse.setAcademyId(updatedCourseDto.getAcademyId()); // Added line
            // existingCourse.setDesc(updatedCourseDto.getDesc());// Added line

            existingCourse = courseRepo.save(existingCourse);
            return Coursemapper.mapToServiceDto(existingCourse);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    public void deleteCourseByName(String name) {
        courseRepo.deleteByName(name);
    }

   
}