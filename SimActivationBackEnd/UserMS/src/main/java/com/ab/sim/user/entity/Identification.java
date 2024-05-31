package com.ab.sim.user.entity;

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
@Table(name = "identification")
public class Identification {
    @Id
    @Column(name = "id_number")
    String idNumber;
    @Column(name = "id_type")
    String idType;
    String state;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    String dob;
}
