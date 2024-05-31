package com.ab.sim.activation.service;

import com.ab.sim.activation.dto.Response;
import com.ab.sim.activation.dto.SimVerification;
import com.ab.sim.activation.entity.Sim;
import com.ab.sim.activation.repository.SimRepository;
import com.ab.sim.activation.util.SimStatus;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.NoSuchElementException;
import java.util.Random;

@Service
@AllArgsConstructor
public class ActivationService {

    private SimRepository simRepository;

    private static final Random r = new Random();

    private Sim getSim(String simNumber) {
        return simRepository.findById(simNumber)
                .orElseThrow(() -> new NoSuchElementException("Sim Number Does not exist!!"));
    }

    public SimVerification verify(SimVerification simVerification) {
        try {
            var sim = getSim(simVerification.simNumber());

            if (!sim.getServiceNumber().equalsIgnoreCase(simVerification.serviceNumber()))
                throw new IllegalArgumentException("Invalid details, please check Service number!!");
            else if (!sim.getActivationStatus().equalsIgnoreCase(SimStatus.DISABLED.toString()))
                throw new IllegalArgumentException("SIM already active");

            return new SimVerification(sim.getSimNumber(), sim.getServiceNumber(), true, "Valid details. Welcome!!", sim.getUserId());

        } catch (IllegalArgumentException | NoSuchElementException ex) {
            return new SimVerification(simVerification.simNumber(), simVerification.serviceNumber(), false, ex.getMessage(), null);
        }

    }

    public Response getOffer() {
        var offers = new String[]
                {
                        "Get 200 min free + 1 gb data",
                        "Get Unlimited Internet form 12am to 6am",
                        "Flat 30% off on your next recharge"
                };
        return new Response(offers[(r.nextInt(offers.length))], "");
    }

    public String activateSim(String simNumber) {
        try {
            var sim = getSim(simNumber);
            sim.setActivationStatus(SimStatus.ACTIVE.toString());
            simRepository.save(sim);
            return "SIM Activated";
        } catch (Exception ex) {
            return ex.getMessage();
        }
    }
}
