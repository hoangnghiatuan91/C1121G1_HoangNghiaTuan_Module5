package com.example.back_end_final_test.service.impl;

import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Posts;
import com.example.back_end_final_test.model.Province;
import com.example.back_end_final_test.repository.ICategoryRepository;
import com.example.back_end_final_test.repository.IDirectionRepository;
import com.example.back_end_final_test.repository.IPostsRepository;
import com.example.back_end_final_test.repository.IProvinceRepository;
import com.example.back_end_final_test.service.IPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PostsService implements IPostService {

    @Autowired
    private ICategoryRepository categoryRepository;

    @Autowired
    private IProvinceRepository provinceRepository;

    @Autowired
    private IDirectionRepository directionRepository;

    @Autowired
    private IPostsRepository postsRepository;

    @Override
    public List<Posts> findAll() {
        return null;
    }

    @Override
    public Optional<Posts> findById(Long id) {
        return this.postsRepository.findById(id);
    }

    @Override
    public void save(Posts posts) {
        this.postsRepository.save(posts);
    }

    @Override
    public void remove(Long id) {

    }

    @Override
    public List<Category> findAllCategory() {
        return categoryRepository.findAll();
    }

    @Override
    public List<Direction> findAllDirection() {
        return directionRepository.findAll();
    }

    @Override
    public List<Province> findAllProvince() {
        return provinceRepository.findAll();
    }

    @Override
    public Page<Posts> findAllPosts(Double area, Double price, String direction, Pageable pageable) {
        return postsRepository.findALlPosts(area, price, direction, pageable);
    }
}
