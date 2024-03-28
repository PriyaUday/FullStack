// package com.zenyoga.madhumitha.controller;

// import java.util.List;
// import java.util.Optional;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.security.access.AccessDeniedException;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
// import org.springframework.web.bind.annotation.RestController;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.service.Courseservice;

// import io.swagger.v3.oas.annotations.tags.Tag;
// import jakarta.transaction.Transactional;
// // @RestController
// // @RequestMapping("/course")

// // @CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })

// // @Tag(name = "Course", description = "Course Details")
// // public class Coursecontroller {

// //     private final Courseservice courseservice;

// //     public Coursecontroller(Courseservice courseservice) {
// //         this.courseservice = courseservice;
// //     }

// //     @Transactional
// //     @GetMapping("/byAcademy/{academyId}")
// //     public ResponseEntity<List<Coursedto>> getAllCoursesByAcademy(@PathVariable Long academyId) {
// //         List<Coursedto> services = courseservice.getAllCoursesByAcademy(academyId);
// //         return new ResponseEntity<>(services, HttpStatus.OK);
// //     }

// //     @Transactional
// //     @GetMapping
// //     public ResponseEntity<List<Coursedto>> getAllServices() {
// //         List<Coursedto> services = courseservice.getAllCourses();
// //         return new ResponseEntity<>(services, HttpStatus.OK);
// //     }

// //     @Transactional
// //     @GetMapping("/{name}")
// //     public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
// //         Coursedto service = courseservice.getCourseByName(name);
// //         if (service != null) {
// //             return new ResponseEntity<>(service, HttpStatus.OK);
// //         } else {
// //             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// //         }
// //     }

// //     @Transactional
// //     @PostMapping
// //     public ResponseEntity<?> createService(@RequestBody Coursedto service) {
// //         try {
// //             Coursedto createdService = courseservice.createCourse(service);
// //             return new ResponseEntity<>(createdService, HttpStatus.CREATED);
// //         } catch (AccessDeniedException e) {
// //             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
// //         } catch (Exception e) {
// //             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
// //         }
// //     }

// //     @Transactional
// //     @PutMapping("/{name}")
// //     public ResponseEntity<?> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
// //         try {
// //             Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
// //             if (updatedServiceDto != null) {
// //                 return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
// //             } else {
// //                 return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// //             }
// //         } catch (AccessDeniedException e) {
// //             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
// //         } catch (Exception e) {
// //             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
// //         }
// //     }

// //     @Transactional
// //     @DeleteMapping("/{name}")
// //     public ResponseEntity<?> deleteServiceByName(@PathVariable String name) {
// //         try {
// //             courseservice.deleteCourseByName(name);
// //             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// //         } catch (AccessDeniedException e) {
// //             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
// //         } catch (Exception e) {
// //             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
// //         }
// //     }
// // }
// @RestController
// @RequestMapping("/course")
// @CrossOrigin(origins = "*", methods = { RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE })
// @Tag(name = "Course", description = "Course Details")
// public class Coursecontroller {

//     private final Courseservice courseservice;

//     public Coursecontroller(Courseservice courseservice) {
//         this.courseservice = courseservice;
//     }

//     @Transactional
//     @GetMapping("/byAcademy/{academyId}")
//     public ResponseEntity<List<Coursedto>> getAllCoursesByAcademy(@PathVariable Long academyId) {
//         List<Coursedto> services = courseservice.getAllCoursesByAcademy(academyId);
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }

//     @Transactional
//     @GetMapping
//     public ResponseEntity<List<Coursedto>> getAllServices() {
//         List<Coursedto> services = courseservice.getAllCourses();
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }

//     @Transactional
//     @GetMapping("/{name}")
//     public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
//         Optional<Coursedto> serviceOptional = courseservice.getCourseByName(name);

//         return serviceOptional.map(service -> new ResponseEntity<>(service, HttpStatus.OK))
//                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//     }

//     @Transactional
//     @PostMapping
//     public ResponseEntity<?> createService(@RequestBody Coursedto service) {
//         try {
//             Coursedto createdService = courseservice.createCourse(service);
//             return new ResponseEntity<>(createdService, HttpStatus.CREATED);
//         } catch (AccessDeniedException e) {
//             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
//         } catch (Exception e) {
//             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }

//     @Transactional
//     @PutMapping("/{name}")
//     public ResponseEntity<?> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
//         try {
//             Optional<Coursedto> updatedServiceDtoOptional = courseservice.updateCourseByName(name, updatedService);
//             return updatedServiceDtoOptional.map(updatedDto -> new ResponseEntity<>(updatedDto, HttpStatus.OK))
//                     .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//         } catch (AccessDeniedException e) {
//             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
//         } catch (Exception e) {
//             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }

//     @Transactional
//     @DeleteMapping("/{name}")
//     public ResponseEntity<?> deleteServiceByName(@PathVariable String name) {
//         try {
//             courseservice.deleteCourseByName(name);
//             return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//         } catch (AccessDeniedException e) {
//             return new ResponseEntity<>("Access denied: " + e.getMessage(), HttpStatus.FORBIDDEN);
//         } catch (Exception e) {
//             return new ResponseEntity<>("Internal server error: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
//         }
//     }
// }
// Coursecontroller.java (Controller for handling course-related requests)
// package com.zenyoga.madhumitha.controller;
// import java.util.List;
// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.service.Courseservice;

// import io.swagger.v3.oas.annotations.tags.Tag;
// import jakarta.transaction.Transactional;
// @RequestMapping("/course")
// @CrossOrigin(origins="*")
// @Tag(name= "Course", description="Course CRUD Operations")
// @RestController
// public class Coursecontroller {
//     private final Courseservice courseservice;
//     public Coursecontroller(Courseservice courseservice) {
//         this.courseservice = courseservice;
//     }
//     // @Tag(name="Get ",description="Listing details")
//     @Transactional
//     @GetMapping
//     public ResponseEntity<List<Coursedto>> getAllServices() {
//         List<Coursedto> services = courseservice.getAllCourses();
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }
//     // @Tag(name="Get ",description="Listing details by their name")
//     @Transactional
//     @GetMapping("/{name}")
//     public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
//         Coursedto service = courseservice.getCourseByName(name);
//         if (service != null) {
//             return new ResponseEntity<>(service, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
//     // @Tag(name="Post",description="Adding details")
//     @Transactional
//     @PostMapping
//     public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
//         Coursedto createdService = courseservice.createCourse(service);
//         return new ResponseEntity<>(createdService, HttpStatus.CREATED);
//     }
//     // @Tag(name="Update",description="Updating details by name")
//     @Transactional
//     @PutMapping("/{name}")
//     public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
//         Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
//         if (updatedServiceDto != null) {
//             return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
//     // @Tag(name="Delete",description="Deleting details by name")
//     @Transactional
//     @DeleteMapping("/{name}")
//     public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
//         courseservice.deleteCourseByName(name);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }
// package com.zenyoga.madhumitha.controller;

// import java.util.List;

// import org.springframework.http.HttpStatus;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.CrossOrigin;
// import org.springframework.web.bind.annotation.DeleteMapping;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
// import org.springframework.web.bind.annotation.PostMapping;
// import org.springframework.web.bind.annotation.PutMapping;
// import org.springframework.web.bind.annotation.RequestBody;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.zenyoga.madhumitha.dto.response.Coursedto;
// import com.zenyoga.madhumitha.service.Courseservice;

// import io.swagger.v3.oas.annotations.tags.Tag;
// import jakarta.transaction.Transactional;
// @RequestMapping("/course")
// @CrossOrigin(origins="*")
// @Tag(name="Course ",description="Course details")
// @RestController

// public class Coursecontroller {

//     private final Courseservice courseservice;

//     public Coursecontroller(Courseservice courseservice) {
//         this.courseservice = courseservice;
//     }
//     @Transactional
//     @GetMapping
//     public ResponseEntity<List<Coursedto>> getAllServices() {
//         List<Coursedto> services = courseservice.getAllCourses();
//         return new ResponseEntity<>(services, HttpStatus.OK);
//     }
//     // @Tag(name="Get ",description="Listing details by their name")
//     @Transactional
//     @GetMapping("/{name}")
//     public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
//         Coursedto service = courseservice.getCourseByName(name);
//         if (service != null) {
//             return new ResponseEntity<>(service, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
//     // @Tag(name="Post",description="Adding details")
//     @Transactional
//     @PostMapping
//     public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
//         Coursedto createdService = courseservice.createCourse(service);
//         return new ResponseEntity<>(createdService, HttpStatus.CREATED);
//     }
//     // @Tag(name="Update",description="Updating details by name")
//     @Transactional
//     @PutMapping("/{name}")
//     public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
//         Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
//         if (updatedServiceDto != null) {
//             return new ResponseEntity<>(updatedServiceDto, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
//     // @Tag(name="Delete",description="Deleting details by name")
//     @Transactional
//     @DeleteMapping("/{name}")
//     public ResponseEntity<Void> deleteServiceByName(@PathVariable String name) {
//         courseservice.deleteCourseByName(name);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }

package com.zenyoga.madhumitha.controller;

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

import com.zenyoga.madhumitha.dto.response.Coursedto;
import com.zenyoga.madhumitha.service.Courseservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;
@RequestMapping("/course")
@CrossOrigin(origins="*")
@Tag(name= "Course", description="Course CRUD Operations")
@RestController

public class Coursecontroller {

    private final Courseservice courseservice;

    public Coursecontroller(Courseservice courseservice) {
        this.courseservice = courseservice;
    }
    // @Tag(name="Get ",description="Listing details")
    @Transactional
    @GetMapping
    public ResponseEntity<List<Coursedto>> getAllServices() {
        List<Coursedto> services = courseservice.getAllCourses();
        return new ResponseEntity<>(services, HttpStatus.OK);
    }
    // @Tag(name="Get ",description="Listing details by their name")
    @Transactional
    @GetMapping("/{name}")
    public ResponseEntity<Coursedto> getServiceByName(@PathVariable String name) {
        Coursedto service = courseservice.getCourseByName(name);
        if (service != null) {
            return new ResponseEntity<>(service, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    @GetMapping("/academy/{academyId}")
    public ResponseEntity<List<Coursedto>> getCoursesByAcademyId(@PathVariable Long academyId) {
        List<Coursedto> courses = courseservice.getCoursesByAcademyId(academyId);
        if (!courses.isEmpty()) {
            return new ResponseEntity<>(courses, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Transactional
    // @GetMapping("/{academyId}")
    // public ResponseEntity<List<Coursedto>> getCoursesByAcademyId(@PathVariable Long academyId) {
    //     List<Coursedto> courses = courseservice.getCoursesByAcademyId(academyId);
    //     if (!courses.isEmpty()) {
    //         return new ResponseEntity<>(courses, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
    @Transactional
    @PostMapping
    public ResponseEntity<Coursedto> createService(@RequestBody Coursedto service) {
        Coursedto createdService = courseservice.createCourse(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    @Transactional
    @PostMapping("/{academyId}")
    public ResponseEntity<Coursedto> createService(@PathVariable Long academyId,@RequestBody Coursedto service) {
        service.setAcademyId(academyId);
        Coursedto createdService = courseservice.createCourse(service);
        return new ResponseEntity<>(createdService, HttpStatus.CREATED);
    }
    // @Tag(name="Update",description="Updating details by name")
    @Transactional
    @PutMapping("/{name}")
    public ResponseEntity<Coursedto> updateServiceByName(@PathVariable String name, @RequestBody Coursedto updatedService) {
        Coursedto updatedServiceDto = courseservice.updateCourseByName(name, updatedService);
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
        courseservice.deleteCourseByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}