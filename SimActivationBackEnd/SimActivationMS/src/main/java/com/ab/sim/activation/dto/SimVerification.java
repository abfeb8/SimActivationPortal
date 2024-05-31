package com.ab.sim.activation.dto;

import javax.validation.constraints.NotNull;

public record SimVerification(
        @NotNull(message = "Sim Number is required")
        String simNumber,
        @NotNull(message = "Service Number is required")
        String serviceNumber,
        boolean isVerified,
        String message,
        Integer userID
) {
}
