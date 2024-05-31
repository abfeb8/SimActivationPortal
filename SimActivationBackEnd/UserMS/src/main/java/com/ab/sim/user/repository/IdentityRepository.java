package com.ab.sim.user.repository;

import com.ab.sim.user.entity.Identification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IdentityRepository extends JpaRepository<Identification, String> {
}
