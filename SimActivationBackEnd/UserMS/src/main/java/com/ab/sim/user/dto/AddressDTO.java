package com.ab.sim.user.dto;

public record AddressDTO(
        String address,
        String state,
        String city,
        String pincode,
        Integer userId
) {
}
