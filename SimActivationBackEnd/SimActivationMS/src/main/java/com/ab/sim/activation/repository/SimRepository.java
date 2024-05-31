package com.ab.sim.activation.repository;

import com.ab.sim.activation.entity.Sim;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SimRepository extends JpaRepository<Sim, String> {
}
