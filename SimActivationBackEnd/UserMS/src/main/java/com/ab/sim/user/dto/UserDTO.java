package com.ab.sim.user.dto;

public record UserDTO(
        String firstName,
        String lastName,
        String email,
        String dateOfBirth
) {
}
