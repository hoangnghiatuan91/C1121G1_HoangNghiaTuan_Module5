package com.example.back_end_final_test.controller;

import com.example.back_end_final_test.dto.PostsDto;
import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Posts;
import com.example.back_end_final_test.model.Province;
import com.example.back_end_final_test.service.IPostService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@CrossOrigin("*")
@RequestMapping(value = "/posts")
public class PostsController {

    @Autowired
    private IPostService postsService;

    @GetMapping(value = "/list")
    public ResponseEntity<Page<Posts>> list(@RequestParam(value = "area", defaultValue = "0.0", required = false) Double area,
                                            @RequestParam(value = "price", defaultValue = "0.0", required = false) Double price,
                                            @RequestParam(value = "directionName", defaultValue = "", required = false) String directionName,
                                            @PageableDefault(size = 5) Pageable pageable){
        Page<Posts> posts = this.postsService.findAllPosts(area,price,directionName,pageable);
        return new ResponseEntity<>(posts,HttpStatus.OK);
    }

    @GetMapping(value = "/category")
    public ResponseEntity<List<Category>> listCategory(){
        List<Category> categories = this.postsService.findAllCategory();
        return new ResponseEntity<>(categories,HttpStatus.OK);
    }

    @GetMapping(value = "/direction")
    public ResponseEntity<List<Direction>> listDirection(){
        List<Direction> directions = this.postsService.findAllDirection();
        return new ResponseEntity<>(directions,HttpStatus.OK);
    }

    @GetMapping(value = "/province")
    public ResponseEntity<List<Province>> listProvince(){
        List<Province> provinces = this.postsService.findAllProvince();
        return new ResponseEntity<>(provinces,HttpStatus.OK);
    }
    @PostMapping(value = "/save")
    public ResponseEntity<Map<String,String>> create(@Valid @RequestBody PostsDto postsDto, BindingResult bindingResult){
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Posts posts = new Posts();
        BeanUtils.copyProperties(postsDto,posts);
        posts.setDeleteFlag(false);
        this.postsService.save(posts);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/edit/{id}")
    public ResponseEntity<PostsDto> editPosts(@PathVariable Long id) {
        Posts posts = this.postsService.findById(id).orElse(null);
        PostsDto postsDto = new PostsDto();
        if (posts != null) {
            BeanUtils.copyProperties(posts, postsDto);

        }
        return new ResponseEntity<>(postsDto,HttpStatus.OK);
    }

    @PutMapping("/update")
    public ResponseEntity<Map<String,String>> updateCustomer(@Valid @RequestBody PostsDto postsDto,
                                                             BindingResult bindingResult) {
        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = bindingResult.getFieldErrors()
                    .stream().collect(Collectors.toMap(
                            e -> e.getField(), e -> e.getDefaultMessage()));
            return new ResponseEntity<>(errorMap, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Posts posts = new Posts();
        BeanUtils.copyProperties(postsDto, posts);
        posts.setDeleteFlag(false);
        this.postsService.save(posts);
        return new ResponseEntity(HttpStatus.OK);
    }

    @PatchMapping("/delete")
    public ResponseEntity<Void> deletePosts(@RequestBody Posts posts) {

        if (posts != null) {
            posts.setDeleteFlag(true);
            this.postsService.save(posts);
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}
