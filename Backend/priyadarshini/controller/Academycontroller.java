// // package com.zenyoga.madhumitha.controller;

// // import java.util.List;
// // import java.util.Optional;

// // import org.springframework.http.HttpStatus;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.CrossOrigin;
// // import org.springframework.web.bind.annotation.DeleteMapping;
// // import org.springframework.web.bind.annotation.GetMapping;
// // import org.springframework.web.bind.annotation.PathVariable;
// // import org.springframework.web.bind.annotation.PostMapping;
// // import org.springframework.web.bind.annotation.PutMapping;
// // import org.springframework.web.bind.annotation.RequestBody;
// // import org.springframework.web.bind.annotation.RequestMapping;
// // import org.springframework.web.bind.annotation.RestController;

// // import com.zenyoga.madhumitha.dto.response.Academydto;
// // import com.zenyoga.madhumitha.service.Academyservice;

// // import io.swagger.v3.oas.annotations.tags.Tag;
// // import jakarta.transaction.Transactional;

// // @RequestMapping("/academy")
// // @CrossOrigin(origins="*")
// // @Tag(name="Academy" ,description="Academy CRUD Operations ")
// // @RestController
// // public class Academycontroller {

// //     private final Academyservice academyservice;

// //     public Academycontroller(Academyservice academyservice) {
// //         this.academyservice = academyservice;
// //     }

// //     // @Tag(name="Get", description="Listing details")
// //     @Transactional
// //     @GetMapping
// //     public ResponseEntity<List<Academydto>> getAllAcademies() {
// //         List<Academydto> academies = academyservice.getAllAcademies();
// //         return new ResponseEntity<>(academies, HttpStatus.OK);
// //     }

// //     // @Tag(name="Get", description="Listing the details by their name")
// //     // @Transactional
// //     // @GetMapping("/{name}")
// //     // public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
// //     //     Academydto academy = academyservice.getAcademyByName(name);
// //     //     if (academy != null) {
// //     //         return new ResponseEntity<>(academy, HttpStatus.OK);
// //     //     } else {
// //     //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// //     //     }
// //     // }
// //     @Transactional
// //     @GetMapping("/{name}")
// //     public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
// //         Optional<Academydto> academyOptional = academyservice.getAcademyByName(name);
    
// //         return academyOptional.map(academy -> new ResponseEntity<>(academy, HttpStatus.OK))
// //                 .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
// //     }
// //     // @Tag(name="Post", description="Adding details")
// //     @Transactional
// //     @PostMapping
// //     public ResponseEntity<Academydto> createAcademy(@RequestBody Academydto academy) {
// //         Academydto createdAcademy = academyservice.createAcademy(academy);
// //         return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
// //     }

// //     // @Tag(name="Update ", description="Updating details by their id")
// //     // @Transactional
// //     // @PutMapping("/{id}")
// //     // public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
// //     //     Academydto updatedAcademyDto = academyservice.updateAcademyById(id, updatedAcademy);
// //     //     if (updatedAcademyDto != null) {
// //     //         return new ResponseEntity<>(updatedAcademyDto, HttpStatus.OK);
// //     //     } else {
// //     //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// //     //     }
// //     // }
// //     @Transactional
// // @PutMapping("/{id}")
// // public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
// //     Optional<Academydto> updatedAcademyDtoOptional = academyservice.updateAcademyById(id, updatedAcademy);

// //     return updatedAcademyDtoOptional.map(updatedDto -> new ResponseEntity<>(updatedDto, HttpStatus.OK))
// //             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
// // }
    
// // @Transactional
// // @DeleteMapping("/{id}")
// // public ResponseEntity<Void> deleteAcademyById(@PathVariable Long id) {
// //     academyservice.deleteAcademyById(id);
// //     return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// // }


    
// //     @Transactional
// //     @DeleteMapping("/{name}")
// //     public ResponseEntity<Void> deleteAcademyByName(@PathVariable String name) {
// //         academyservice.deleteAcademyByName(name);
// //         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// //     }
// // }

// // // package com.zenyoga.madhumitha.controller;

// // // import java.util.List;
// // // import java.util.Optional;

// // // import org.springframework.http.HttpStatus;
// // // import org.springframework.http.ResponseEntity;
// // // import org.springframework.web.bind.annotation.CrossOrigin;
// // // import org.springframework.web.bind.annotation.DeleteMapping;
// // // import org.springframework.web.bind.annotation.GetMapping;
// // // import org.springframework.web.bind.annotation.PathVariable;
// // // import org.springframework.web.bind.annotation.PostMapping;
// // // import org.springframework.web.bind.annotation.PutMapping;
// // // import org.springframework.web.bind.annotation.RequestBody;
// // // import org.springframework.web.bind.annotation.RequestMapping;
// // // import org.springframework.web.bind.annotation.RestController;

// // // import com.zenyoga.madhumitha.dto.response.Academydto;
// // // import com.zenyoga.madhumitha.service.Academyservice;

// // // import io.swagger.v3.oas.annotations.tags.Tag;
// // // import jakarta.transaction.Transactional;

// // // @RequestMapping("/academy")
// // // @CrossOrigin(origins="*")
// // // @Tag(name= "Academy", description="Academy CRUD Operations")
// // // @RestController
// // // public class Academycontroller {

// // //     private final Academyservice academyservice;

// // //     public Academycontroller(Academyservice academyservice) {
// // //         this.academyservice = academyservice;
// // //     }

// // //     // @Tag(name="Get", description="Listing details")
// // //     @Transactional
// // //     @GetMapping
// // //     public ResponseEntity<List<Academydto>> getAllAcademies() {
// // //         List<Academydto> academies = academyservice.getAllAcademies();
// // //         return new ResponseEntity<>(academies, HttpStatus.OK);
// // //     }

// // //     // @Tag(name="Get", description="Listing the details by their name")
// // //     @Transactional
// // //     @GetMapping("/{name}")
// // //     public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
// // //         Academydto academy = academyservice.getAcademyByName(name);
// // //         if (academy != null) {
// // //             return new ResponseEntity<>(academy, HttpStatus.OK);
// // //         } else {
// // //             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// // //         }
// // //     }

// // //     // @Tag(name="Post", description="Adding details")
// // //     @Transactional
// // //     @PostMapping
// // //     public ResponseEntity<Academydto> createAcademy(@RequestBody Academydto academy) {
// // //         Academydto createdAcademy = academyservice.createAcademy(academy);
// // //         return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
// // //     }

// // //     // @Tag(name="Update ", description="Updating details by their name")
// // //     @Transactional
// // //     @PutMapping("/{name}")
// // //     public ResponseEntity<Academydto> updateAcademyByName(@PathVariable String name, @RequestBody Academydto updatedAcademy) {
// // //         Academydto updatedAcademyDto = academyservice.updateAcademyByName(name, updatedAcademy);
// // //         if (updatedAcademyDto != null) {
// // //             return new ResponseEntity<>(updatedAcademyDto, HttpStatus.OK);
// // //         } else {
// // //             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
// // //         }
// // //     }


// // //     // @Transactional
// // //     // @PutMapping("/{id}")
// // //     // public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
// // //     // Optional<Academydto> updatedAcademyDtoOptional = academyservice.updateAcademyById(id, updatedAcademy);

// // //     // return updatedAcademyDtoOptional.map(updatedDto -> new ResponseEntity<>(updatedDto, HttpStatus.OK))
// // //     //         .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
// // //     // }
// // //     @Transactional
// // // @PutMapping("/{id}")
// // // public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
// // //     Optional<Academydto> updatedAcademyDtoOptional = academyservice.updateAcademyById(id, updatedAcademy);

// // //     return updatedAcademyDtoOptional.map(updatedDto -> new ResponseEntity<>(updatedDto, HttpStatus.OK))
// // //             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
// // // }
// // //     // @Tag(name="Delete", description="Deleting details by their name")
// // //     @Transactional
// // //     @DeleteMapping("/{name}")
// // //     public ResponseEntity<Void> deleteAcademyByName(@PathVariable String name) {
// // //         academyservice.deleteAcademyByName(name);
// // //         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
// // //     }
// // // }
// package com.zenyoga.madhumitha.controller;

// import java.util.List;
// import java.util.Optional;

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

// import com.zenyoga.madhumitha.dto.response.Academydto;
// import com.zenyoga.madhumitha.service.Academyservice;

// import io.swagger.v3.oas.annotations.tags.Tag;
// import jakarta.transaction.Transactional;

// @RequestMapping("/academy")
// @CrossOrigin(origins="*")
// @Tag(name= "Academy", description="Academy CRUD Operations")
// @RestController
// public class Academycontroller {

//     private final Academyservice academyservice;

//     public Academycontroller(Academyservice academyservice) {
//         this.academyservice = academyservice;
//     }

//     // @Tag(name="Get", description="Listing details")
//     @Transactional
//     @GetMapping
//     public ResponseEntity<List<Academydto>> getAllAcademies() {
//         List<Academydto> academies = academyservice.getAllAcademies();
//         return new ResponseEntity<>(academies, HttpStatus.OK);
//     }

//     // @Tag(name="Get", description="Listing the details by their name")
//     @Transactional
//     @GetMapping("/{name}")
//     public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
//         Academydto academy = academyservice.getAcademyByName(name);
//         if (academy != null) {
//             return new ResponseEntity<>(academy, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }

//     // @Tag(name="Post", description="Adding details")
//     @Transactional
//     @PostMapping
//     public ResponseEntity<Academydto> createAcademy(@RequestBody Academydto academy) {
//         Academydto createdAcademy = academyservice.createAcademy(academy);
//         return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
//     }

//     // @Tag(name="Update ", description="Updating details by their name")
//     @Transactional
//     @PutMapping("/{name}")
//     public ResponseEntity<Academydto> updateAcademyByName(@PathVariable String name, @RequestBody Academydto updatedAcademy) {
//         Academydto updatedAcademyDto = academyservice.updateAcademyByName(name, updatedAcademy);
//         if (updatedAcademyDto != null) {
//             return new ResponseEntity<>(updatedAcademyDto, HttpStatus.OK);
//         } else {
//             return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//         }
//     }
//     @Transactional
//     @PutMapping("/{id}")
//     public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
//     Optional<Academydto> updatedAcademyDtoOptional = academyservice.updateAcademyById(id, updatedAcademy);

//     return updatedAcademyDtoOptional.map(updatedDto -> new ResponseEntity<>(updatedDto, HttpStatus.OK))
//             .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
//     }

//     // @Tag(name="Delete", description="Deleting details by their name")
//     @Transactional
//     @DeleteMapping("/{name}")
//     public ResponseEntity<Void> deleteAcademyByName(@PathVariable String name) {
//         academyservice.deleteAcademyByName(name);
//         return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//     }
// }
//original
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

import com.zenyoga.madhumitha.dto.response.Academydto;
import com.zenyoga.madhumitha.service.Academyservice;

import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.transaction.Transactional;

@RequestMapping("/academy")
@CrossOrigin(origins="*")
@Tag(name="Academy" ,description="Academy CRUD Operations ")
@RestController
public class Academycontroller {

    private final Academyservice academyservice;

    public Academycontroller(Academyservice academyservice) {
        this.academyservice = academyservice;
    }

    // @Tag(name="Get", description="Listing details")
    @Transactional
    // @GetMapping
    // public ResponseEntity<List<Academydto>> getAllAcademies() {
    //     List<Academydto> academies = academyservice.getAllAcademies();
    //     return new ResponseEntity<>(academies, HttpStatus.OK);
    // }
    @GetMapping
    public ResponseEntity<List<Academydto>> getAllAcademies() {
        List<Academydto> academies = academyservice.getAllAcademies();
        academies.forEach(academy -> academy.setImageUrl(academy.getImageUrl() != null ? academy.getImageUrl() : "https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg"));
        return new ResponseEntity<>(academies, HttpStatus.OK);
    }
    // @Tag(name="Get", description="Listing the details by their name")
    @Transactional
    // @GetMapping("/{name}")
    // public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
    //     Academydto academy = academyservice.getAcademyByName(name);
    //     if (academy != null) {
    //         return new ResponseEntity<>(academy, HttpStatus.OK);
    //     } else {
    //         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    //     }
    // }
    @GetMapping("/{name}")
    public ResponseEntity<Academydto> getAcademyByName(@PathVariable String name) {
        Academydto academy = academyservice.getAcademyByName(name);
        if (academy != null) {
            academy.setImageUrl(academy.getImageUrl() != null ? academy.getImageUrl() : "https://img.freepik.com/free-photo/beautiful-woman-meditating-outdoors_72229-1500.jpg");
            return new ResponseEntity<>(academy, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    // @Tag(name="Post", description="Adding details")
    @Transactional
    @PostMapping
    public ResponseEntity<Academydto> createAcademy(@RequestBody Academydto academy) {
        Academydto createdAcademy = academyservice.createAcademy(academy);
        return new ResponseEntity<>(createdAcademy, HttpStatus.CREATED);
    }

    // @Tag(name="Update ", description="Updating details by their id")
    @Transactional
    @PutMapping("/{id}")
    public ResponseEntity<Academydto> updateAcademyById(@PathVariable Long id, @RequestBody Academydto updatedAcademy) {
        Academydto updatedAcademyDto = academyservice.updateAcademyById(id, updatedAcademy);
        if (updatedAcademyDto != null) {
            return new ResponseEntity<>(updatedAcademyDto, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
    // @Tag(name="Delete", description="Deleting details by their name")
    @Transactional
    @DeleteMapping("/{name}")
    public ResponseEntity<Void> deleteAcademyByName(@PathVariable String name) {
        academyservice.deleteAcademyByName(name);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
  
}
