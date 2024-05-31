package com.ab.sim.user.controller;

import com.ab.sim.user.dto.AddressDTO;
import com.ab.sim.user.dto.IdentificationDTO;
import com.ab.sim.user.dto.UserVerificationDTO;
import com.ab.sim.user.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/user")
@AllArgsConstructor
public class UserController {

    private UserService userService;

    @PostMapping("/verify")
    public ResponseEntity<UserVerificationDTO> verifyUser(@RequestBody UserVerificationDTO dto) {
        return ResponseEntity.ok(userService.validateUser(dto));
    }

    @PostMapping("/address")
    public ResponseEntity<AddressDTO> addAddress(@RequestBody AddressDTO addressDTO) {
        return ResponseEntity.ok(userService.addAddress(addressDTO));
    }

    @PostMapping("/id-verification")
    public ResponseEntity<UserVerificationDTO> verifyUserId(@RequestBody IdentificationDTO identificationDTO) {
        return ResponseEntity.ok(userService.verifyUserId(identificationDTO));
    }
}
