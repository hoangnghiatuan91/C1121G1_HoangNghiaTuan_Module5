package com.example.back_end_final_test.repository;

import com.example.back_end_final_test.model.Posts;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IPostsRepository extends JpaRepository<Posts,Long> {
    @Query(value = "select * from posts inner join direction on direction.id = posts.direction_id" +
            " where delete_flag = 0 and area > :area and price > :price and direction.direction_name like concat('%',:directionName,'%')",
    countQuery = "select count(*) from posts inner join direction on direction.id = posts.direction_id" +
            " where delete_flag = 0 and area > :area and price > :price and direction.direction_name like concat('%',:directionName,'%')",
    nativeQuery = true)
Page<Posts> findALlPosts( @Param(value = "area") Double area,@Param(value = "price") Double price,@Param(value = "directionName") String directionName, Pageable pageable);
}
