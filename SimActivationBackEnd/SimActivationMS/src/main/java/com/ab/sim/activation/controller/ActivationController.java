package com.ab.sim.activation.controller;

import com.ab.sim.activation.dto.Response;
import com.ab.sim.activation.dto.SimVerification;
import com.ab.sim.activation.service.ActivationService;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/sim")
@AllArgsConstructor
public class ActivationController {

    private ActivationService activationService;

    @PostMapping("/verify")
    public ResponseEntity<SimVerification> validateSim(@Valid @RequestBody SimVerification simVerification) {
        return ResponseEntity.ok(activationService.verify(simVerification));
    }

    @GetMapping("/offer")
    public ResponseEntity<Response> getOffer() {
        return ResponseEntity.ok(activationService.getOffer());
    }

    @PostMapping("/activate/{simNumber}")
    public ResponseEntity<Response> activateSim(@PathVariable String simNumber){
        return ResponseEntity.ok(new Response(activationService.activateSim(simNumber), ""));
    }
}
