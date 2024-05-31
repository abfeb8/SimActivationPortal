package com.ab.sim.user.service;

import com.ab.sim.user.dto.AddressDTO;
import com.ab.sim.user.dto.IdentificationDTO;
import com.ab.sim.user.dto.UserVerificationDTO;
import com.ab.sim.user.entity.Address;
import com.ab.sim.user.entity.Identification;
import com.ab.sim.user.entity.User;
import com.ab.sim.user.repository.AddressRepository;
import com.ab.sim.user.repository.IdentityRepository;
import com.ab.sim.user.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.NoSuchElementException;
import java.util.Objects;

@Service
@AllArgsConstructor
public class UserService {

    private UserRepository userRepository;
    private AddressRepository addressRepository;
    private IdentityRepository identityRepository;

//    @PostConstruct
//    void setUp() {
//        userRepository.save(new User(1, "Abhishek", "Malviya", "ab@gmail.com", "1997-02-08"));
//        userRepository.save(new User(2, "Jayesh", "Malviya", "jay@gmail.com", "2000-10-10"));
//    }

    private User getUser(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new NoSuchElementException("No request placed for you."));
    }

    public UserVerificationDTO validateUser(UserVerificationDTO dto) {
        try {
            var user = getUser(dto.user().email());
            if (!Objects.equals(user.getId(), dto.userId()))
                throw new IllegalArgumentException("Invalid details");
            else if (!Objects.equals(user.getDob(), dto.user().dateOfBirth()))
                throw new IllegalArgumentException("No request placed for you.");

            return new UserVerificationDTO(user.getDTO(), true, "Valid Request", dto.userId());

        } catch (NoSuchElementException | IllegalArgumentException ex) {
            return new UserVerificationDTO(dto.user(), false, ex.getMessage(), dto.userId());
        }
    }

    public AddressDTO addAddress(AddressDTO addressDTO) {
        return addressRepository.save(Address.value(addressDTO)).dto();
    }

    private Identification getId(String id) {
        return identityRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Id does not exist"));
    }

    public UserVerificationDTO verifyUserId(IdentificationDTO identificationDTO) {
        try {
            var id = getId(identificationDTO.idNumber());

            if (!id.getFirstName().equalsIgnoreCase(identificationDTO.firstName()) ||
                    !id.getLastName().equalsIgnoreCase(identificationDTO.lastName()))
                throw new IllegalArgumentException("User Name Invalid");
            else if (!id.getDob().equalsIgnoreCase(identificationDTO.dateOfBirth()))
                throw new IllegalArgumentException("DOB is invalid");

            return new UserVerificationDTO(null, true, "Validation Sccess", null);
        } catch (NoSuchElementException | IllegalArgumentException ex) {
            return new UserVerificationDTO(null, false, ex.getMessage(), null);
        }
    }
}
