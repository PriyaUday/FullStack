// package com.recharge.mobilerecharge.controller;

// import com.recharge.mobilerecharge.model.User;
// import com.recharge.mobilerecharge.service.UserService;

// import io.swagger.v3.oas.annotations.tags.Tag;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.http.ResponseEntity;
// import org.springframework.web.bind.annotation.*;

// import java.util.List;

// @RestController
// @RequestMapping("/api/users")
// public class UserController {

//     @Autowired
//     private UserService userService;

//     @Tag(name="Get Users", description="endpoint for fetching all users")
//     @PostMapping("/register")
//     public ResponseEntity<User> saveUser(@RequestBody User user) {
//         User savedUser = userService.saveUser(user);
//         return ResponseEntity.ok().body(savedUser);
//     }

// }

// //---------------------------------------end---------------------------------------------------------
// // package com.recharge.mobilerecharge.controller;

// // import com.recharge.mobilerecharge.model.User;
// // import com.recharge.mobilerecharge.service.UserService;
// // import org.springframework.beans.factory.annotation.Autowired;
// // import org.springframework.http.ResponseEntity;
// // import org.springframework.web.bind.annotation.*;

// // import java.util.List;

// // @RestController
// // @RequestMapping("/api/users")
// // public class UserController {

// //     @Autowired
// //     private UserService userService;

// //     @GetMapping
// //     public List<User> getAllUsers() {
// //         return userService.getAllUsers();
// //     }

// //     @GetMapping("/{id}")
// //     public ResponseEntity<User> getUserById(@PathVariable Long id) {
// //         User user = userService.getUserById(id);
// //         return ResponseEntity.ok().body(user);
// //     }

// //     @GetMapping("/byEmail/{email}")
// //     public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
// //         User user = userService.getUserByEmail(email);
// //         return ResponseEntity.ok().body(user);
// //     }

// //     @PostMapping
// //     public ResponseEntity<User> saveUser(@RequestBody User user) {
// //         User savedUser = userService.saveUser(user);
// //         return ResponseEntity.ok().body(savedUser);
// //     }

// //     @DeleteMapping("/{id}")
// //     public ResponseEntity<Void> deleteUser(@PathVariable Long id) {
// //         userService.deleteUser(id);
// //         return ResponseEntity.noContent().build();
// //     }
// // }

package com.zenyoga.priyadarshini.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.priyadarshini.entity.User;
import com.zenyoga.priyadarshini.service.UserService;

import io.swagger.v3.oas.annotations.tags.Tag;


@RestController
@CrossOrigin("*")
@Tag(name= "User", description="User CRUD Operations")
public class UserController {
    @Autowired
	UserService us;
	
    @PostMapping("user/post")
	public boolean addUser(@RequestBody User ue)
	{
        return us.AddUser(ue);
	}
    @GetMapping("user/get")
    public List<User> getAllUser()
    {
        return us.getUser();
    }
	@GetMapping("user/get/{id}")
	public Optional<User> getbyId(@PathVariable Long id)
	{
		return us.getById(id);
	}
    
}