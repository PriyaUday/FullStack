package com.zenyoga.madhumitha.service;

import com.zenyoga.madhumitha.dto.request.ForgotPasswordRequest;
import com.zenyoga.madhumitha.dto.request.LoginRequest;
import com.zenyoga.madhumitha.dto.request.RegisterRequest;
import com.zenyoga.madhumitha.dto.response.ForgotPasswordResponse;
import com.zenyoga.madhumitha.dto.response.LoginResponse;
import com.zenyoga.madhumitha.dto.response.RegisterResponse;

import io.jsonwebtoken.io.IOException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

     void refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException;
   
    ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request);
    LoginResponse login(LoginRequest request);
}
