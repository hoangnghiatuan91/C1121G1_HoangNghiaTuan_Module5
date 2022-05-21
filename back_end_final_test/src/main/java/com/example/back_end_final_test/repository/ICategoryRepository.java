package com.example.back_end_final_test.repository;

import com.example.back_end_final_test.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ICategoryRepository extends JpaRepository<Category,Long> {
}
