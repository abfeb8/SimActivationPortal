package com.ab.sim.user.dto;

public record IdentificationDTO(
        String idNumber,
        String idType,
        String state,
        String firstName,
        String lastName,
        String dateOfBirth
) {
}
