package com.zenyoga.madhumitha.service.impl;

import java.security.Principal;

import com.zenyoga.madhumitha.dto.request.PasswordRequest;

public interface UserServices {
     void forgotPassword(PasswordRequest request, Principal principal);
    
}
