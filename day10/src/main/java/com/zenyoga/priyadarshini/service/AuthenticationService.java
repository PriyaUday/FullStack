package com.zenyoga.priyadarshini.service;

import com.zenyoga.priyadarshini.dto.request.LoginRequest;
import com.zenyoga.priyadarshini.dto.request.RegisterRequest;
import com.zenyoga.priyadarshini.dto.response.LoginResponse;
import com.zenyoga.priyadarshini.dto.response.RegisterResponse;

public interface AuthenticationService {
    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);
}