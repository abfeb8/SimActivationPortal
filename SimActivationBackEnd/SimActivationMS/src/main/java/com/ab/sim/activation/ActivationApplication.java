package com.ab.sim.activation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class ActivationApplication {

	public static void main(String[] args) {
		SpringApplication.run(ActivationApplication.class, args);
	}

}
