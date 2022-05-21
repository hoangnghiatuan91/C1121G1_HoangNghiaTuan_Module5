package com.example.back_end_final_test.repository;

import com.example.back_end_final_test.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IProvinceRepository extends JpaRepository<Province,Long> {
}
