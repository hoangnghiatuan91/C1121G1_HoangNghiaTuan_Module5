package com.example.back_end_final_test.service;

import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Posts;
import com.example.back_end_final_test.model.Province;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IPostService extends IGeneralService<Posts> {
    List<Category> findAllCategory();

    List<Direction> findAllDirection();

    List<Province> findAllProvince();

    Page<Posts> findAllPosts( Double area, Double price, String direction, Pageable pageable, String sortValue);
}
