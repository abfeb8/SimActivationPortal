package com.ab.sim.user.entity;

import com.ab.sim.user.dto.AddressDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue
    Integer id;
    @Column(name = "address_line")
    String addressLine;
    String state;
    String city;
    String pincode;
    @Column(name = "user_id")
    Integer userId;

    public Address(String address, String state, String city, String pincode, Integer userId) {
        this.addressLine = address;
        this.state = state;
        this.city = city;
        this.pincode = pincode;
        this.userId = userId;
    }

    public static Address value(AddressDTO addressDTO) {
        return new Address(addressDTO.address(), addressDTO.state(), addressDTO.city(), addressDTO.pincode(), addressDTO.userId());
    }

    public AddressDTO dto() {
        return new AddressDTO(
                this.addressLine,
                this.state,
                this.city,
                this.pincode,
                this.userId
        );
    }
}
