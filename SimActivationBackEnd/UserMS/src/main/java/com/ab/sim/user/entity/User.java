package com.ab.sim.user.entity;

import com.ab.sim.user.dto.UserDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "user")
public class User {
    @Id
    Integer id;
    @Column(name = "first_name")
    String firstName;
    @Column(name = "last_name")
    String lastName;
    String email;
    String dob;

    public UserDTO getDTO() {
        return new UserDTO(firstName, lastName, email, dob);
    }
}
