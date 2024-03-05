// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.User;

// import java.util.List;

// public interface UserService {

//     User saveUser(User user);
// }


package com.zenyoga.priyadarshini.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.zenyoga.priyadarshini.entity.User;
import com.zenyoga.priyadarshini.repository.UserRepository;

@Service
public class UserService {
    @Autowired
    UserRepository ur;
     
     
     public boolean AddUser(User ue)
     {
          ur.save(ue);
          return true;
     }
     public List<User> getUser()
     {
          return ur.findAll();
     }
     public Optional<User> getById(Long id)
     {
    	 return ur.findById(id);
     }
}
//--------------------------------------------end-----------------------------------------------
// package com.recharge.mobilerecharge.service;

// import com.recharge.mobilerecharge.model.User;

// import java.util.List;

// public interface UserService {
//     List<User> getAllUsers();

//     User getUserById(Long id);

//     User getUserByEmail(String email);

//     User saveUser(User user);

//     void deleteUser(Long id);
// }
