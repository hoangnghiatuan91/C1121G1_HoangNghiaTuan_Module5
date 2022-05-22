package com.example.back_end_final_test.dto;

import com.example.back_end_final_test.model.Category;
import com.example.back_end_final_test.model.Direction;
import com.example.back_end_final_test.model.Province;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;


public class PostsDto {
    private Long id;

    private Category category;

    private Province province;
    private String seller;
    private String typeOfPost;
    private String condition;

    @NotBlank(message = "Can not empty")
    private String address;

    @NotNull(message = "Can not empty")
    @Min(value = 20,message = "Min is 20m2")
//    @Pattern(regexp = "^$|^\\d+$",message = "Must be number")
    private Double area;
    private Direction direction;

    @NotBlank(message = "Can not empty")
    private String title;

    @NotBlank(message = "Can not empty")
    private String content;

    @NotNull(message = "Can not empty")
    @Min(value = 100000000,message = "Min is 100.000.000")
//    @Pattern(regexp = "^$|^\\d+$",message = "Must be number")
    private Double price;

    @NotBlank(message = "Can not empty")
    private String startDate;

    @NotBlank(message = "Can not empty")
    private String status;
    private boolean deleteFlag;

    public PostsDto() {
        this.deleteFlag = false;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public Province getProvince() {
        return province;
    }

    public void setProvince(Province province) {
        this.province = province;
    }

    public String getSeller() {
        return seller;
    }

    public void setSeller(String seller) {
        this.seller = seller;
    }

    public String getTypeOfPost() {
        return typeOfPost;
    }

    public void setTypeOfPost(String typeOfPost) {
        this.typeOfPost = typeOfPost;
    }

    public String getCondition() {
        return condition;
    }

    public void setCondition(String condition) {
        this.condition = condition;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public Direction getDirection() {
        return direction;
    }

    public void setDirection(Direction direction) {
        this.direction = direction;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public String getStartDate() {
        return startDate;
    }

    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public boolean isDeleteFlag() {
        return deleteFlag;
    }

    public void setDeleteFlag(boolean deleteFlag) {
        this.deleteFlag = deleteFlag;
    }
}
