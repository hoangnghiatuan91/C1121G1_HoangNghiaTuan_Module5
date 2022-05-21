package com.example.back_end_final_test.service;

import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Post;
import com.example.back_end_final_test.model.Province;

import java.util.List;

public interface IPostService extends IGeneralService<Post> {
    List<Category> findAllCategory();
    List<Direction> findAllDirection();
    List<Province> findAllProvince();
}
