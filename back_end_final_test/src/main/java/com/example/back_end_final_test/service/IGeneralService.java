package com.example.back_end_final_test.service;

import java.util.List;
import java.util.Optional;

public interface IGeneralService<T> {
    List<T> findAll();

    Optional<T> findById(Long id);

    void save(T t);

    void remove(Long id);
}
