package com.example.back_end_final_test.repository;

import com.example.back_end_final_test.model.Direction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IDirectionRepository extends JpaRepository<Direction,Long> {
}
