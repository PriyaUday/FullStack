package com.zenyoga.madhumitha.controller;


import static com.zenyoga.madhumitha.utils.MyConstant.*;
import static org.springframework.http.HttpStatus.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.zenyoga.madhumitha.dto.request.ForgotPasswordRequest;
import com.zenyoga.madhumitha.dto.request.LoginRequest;
import com.zenyoga.madhumitha.dto.request.RegisterRequest;
import com.zenyoga.madhumitha.dto.response.ForgotPasswordResponse;
import com.zenyoga.madhumitha.dto.response.LoginResponse;
import com.zenyoga.madhumitha.dto.response.RegisterResponse;
import com.zenyoga.madhumitha.service.AuthenticationService;
import com.zenyoga.madhumitha.utils.MyConstant;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

@RestController
@CrossOrigin(origins = "*")
@RequiredArgsConstructor
@RequestMapping(AUTH)
@Tag(name="Authentication",description="Register and Login")
public class AuthenticationController {

    private final AuthenticationService authService;
    @PostMapping(REGISTER)
    public ResponseEntity<RegisterResponse> register(@RequestBody RegisterRequest request) {
        RegisterResponse response = new RegisterResponse();
        try {
            response = authService.register(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Registration failed due to an unexpected error.");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
    // @Tag(name="Login",description="Login using your details")
    @PostMapping(LOGIN)
    public ResponseEntity<LoginResponse> login(@RequestBody LoginRequest request) {
        LoginResponse response = new LoginResponse();
        try {
            response = authService.login(request);
            return new ResponseEntity<>(response, ACCEPTED);
        } catch (Exception e) {
            response.setMessage("Login failed!");
            response.setToken("");
            return new ResponseEntity<>(response, EXPECTATION_FAILED);
        }
    }
      @PatchMapping(MyConstant.FORGOT_PASSWORD)
    public ResponseEntity<ForgotPasswordResponse> forgotPassword(@RequestBody ForgotPasswordRequest request) {
        ForgotPasswordResponse response = new ForgotPasswordResponse();
        try {
            response = authService.forgotPassword(request);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        } catch (UsernameNotFoundException e) {
            // Handle the case where the user is not found
            response.setMessage("User not found");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        } catch (Exception e) {
            // Handle other exceptions
            response.setMessage("Password update failed");
            return new ResponseEntity<>(response, HttpStatus.EXPECTATION_FAILED);
        }
    }

}