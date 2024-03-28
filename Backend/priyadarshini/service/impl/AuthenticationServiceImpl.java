package com.zenyoga.madhumitha.service.impl;
import static com.zenyoga.madhumitha.enumerated.TokenType.*;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.zenyoga.madhumitha.dto.request.ForgotPasswordRequest;
import com.zenyoga.madhumitha.dto.request.LoginRequest;
import com.zenyoga.madhumitha.dto.request.RegisterRequest;
import com.zenyoga.madhumitha.dto.response.ForgotPasswordResponse;
import com.zenyoga.madhumitha.dto.response.LoginResponse;
import com.zenyoga.madhumitha.dto.response.RegisterResponse;
import com.zenyoga.madhumitha.model.Token;
import com.zenyoga.madhumitha.model.User;
import com.zenyoga.madhumitha.repository.TokenRepo;
import com.zenyoga.madhumitha.repository.UserRepository;
import com.zenyoga.madhumitha.service.AuthenticationService;
import com.zenyoga.madhumitha.utils.JwtUtil;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
@Service
@RequiredArgsConstructor

@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService {
        
        private final PasswordEncoder passwordEncoder;
        private final UserRepository usersRepository;
        private final TokenRepo tokenRepository;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request) {
        if (!request.getPassword().equals(request.getConfirmPassword())) {
            return RegisterResponse.builder()
                    .message("Password and ConfirmPassword do not match")
                    .build();
        }

        var user = User.builder()
                .name(request.getName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .role(com.zenyoga.madhumitha.enumerated.Role.USER)
                .build();
        usersRepository.save(user);
        return RegisterResponse.builder()
                .message("User registered successfully")
                .build();
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        var user = usersRepository.findByEmail(request.getEmail()).orElseThrow();
        var token = jwtUtil.generateToken(user);
        System.out.println("Token Payload: " + jwtUtil.extractAllClaims(token));

        return LoginResponse.builder()
                .message("Logged in successfully.")
                .token(token)
                .build();
    }

    
   @Override
    public ForgotPasswordResponse forgotPassword(ForgotPasswordRequest request) {
        try {
            return handleForgotPassword(request);
        } catch (Exception e) {
            return ForgotPasswordResponse.builder().success(false).message("Password update failed").build();
        }
    }

    private ForgotPasswordResponse handleForgotPassword(ForgotPasswordRequest request) {
        var user = usersRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new UsernameNotFoundException("User not found with email " + request.getEmail()));

        if (!passwordEncoder.matches(request.getCurrentPassword(), user.getPassword())) {
            return ForgotPasswordResponse.builder().success(false).message("Current password incorrect").build();
        }

        if (!request.getNewPassword().equals(request.getConfirmPassword())) {
            return ForgotPasswordResponse.builder().success(false).message("New password mismatch").build();
        }

        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        usersRepository.save(user);

        return ForgotPasswordResponse.builder().success(true).message("Password updated successfully").build();
    }
    private void saveUserToken(User user, String accessToken) {
                var token = Token.builder()
                                .user(user)
                                .token(accessToken)
                                .tokenType(BEARER)
                                .expired(false)
                                .revoked(false)
                                .build();
                tokenRepository.save(token);
        }

@Override
public void refreshToken(HttpServletRequest request, HttpServletResponse response)
                throws io.jsonwebtoken.io.IOException {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'refreshToken'");
}

}