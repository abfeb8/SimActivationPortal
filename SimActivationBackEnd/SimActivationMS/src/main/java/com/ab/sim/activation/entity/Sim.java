package com.ab.sim.activation.entity;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "sim")
public class Sim {
    @Id
    @Column(name = "sim_number")
    String simNumber;
    @Column(name = "service_number")
    String serviceNumber;
    @Column(name = "activation_status")
    String activationStatus;
    @Column(name = "user_id")
    Integer userId;
}
