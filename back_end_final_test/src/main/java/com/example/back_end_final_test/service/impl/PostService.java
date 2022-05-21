package com.example.back_end_final_test.service.impl;

import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Post;
import com.example.back_end_final_test.model.Province;
import com.example.back_end_final_test.service.IPostService;

import java.util.List;
import java.util.Optional;

public class PostService implements IPostService {
    @Override
    public List<Post> findAll() {
        return null;
    }

    @Override
    public Optional<Post> findById(Long id) {
        return Optional.empty();
    }

    @Override
    public void save(Post post) {

    }

    @Override
    public void remove(Long id) {

    }

    @Override
    public List<Category> findAllCategory() {
        return null;
    }

    @Override
    public List<Direction> findAllDirection() {
        return null;
    }

    @Override
    public List<Province> findAllProvince() {
        return null;
    }
}
