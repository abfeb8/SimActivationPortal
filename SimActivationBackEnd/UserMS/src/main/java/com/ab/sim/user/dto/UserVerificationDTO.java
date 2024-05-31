package com.ab.sim.user.dto;

public record UserVerificationDTO(
        UserDTO user,
        boolean isVerified,
        String message,
        Integer userId
) {
}
