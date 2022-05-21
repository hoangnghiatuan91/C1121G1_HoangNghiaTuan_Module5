package com.example.back_end_final_test.repository;

import com.example.back_end_final_test.model.Post;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IPostRepository extends JpaRepository<Post,Long> {

}
