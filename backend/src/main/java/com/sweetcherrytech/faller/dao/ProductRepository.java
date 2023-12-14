package com.sweetcherrytech.faller.dao;

import com.sweetcherrytech.faller.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductRepository extends JpaRepository<Product, Long> {

    @Query("SELECT p FROM Product p WHERE p.title LIKE %:title% AND p.price BETWEEN :minPrice AND :maxPrice")
    Page<Product> findByTitleAndPrice(String title,Double minPrice, Double maxPrice, Pageable pageable);

}