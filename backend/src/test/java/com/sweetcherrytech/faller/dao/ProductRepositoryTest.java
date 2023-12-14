package com.sweetcherrytech.faller.dao;

import com.sweetcherrytech.faller.model.Product;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import static org.springframework.util.Assert.*;

@SpringBootTest(properties = {"spring.profiles.active=test"})
public class ProductRepositoryTest {

    @Autowired
    private ProductRepository productRepository;

    @BeforeAll
    public static void init(@Autowired ProductRepository productRepository) {
        System.out.println("### Check inject: " + productRepository);
        System.out.println("### Products: " + productRepository.findAll());
    }


    @Test
    void findByTitleAndPriceOK() {
        Page<Product> results = productRepository.findByTitleAndPrice("", 0d, 1000d, PageRequest.of(0, 10));

        notNull(results, "Result must not be null");
        isTrue(results.getTotalElements() == 12, "Total elements must be 12, (check DML.sql)");
        notEmpty(results.getContent(), "Content must not be empty");
        isTrue(results.getContent().size() == 10, "Total elements in the page must be 10");
    }

    @Test
    void findByTitleAndPriceTestTitle() {
        final String title = "Prod 9";
        final Page<Product> results = productRepository.findByTitleAndPrice(title, 0d, 1000d, PageRequest.of(0, 10));

        notNull(results, "Result must not be null");
        isTrue(results.getTotalElements() == 1, "Total elements must be 1");
        notEmpty(results.getContent(), "Content must not be empty");
        isTrue(results.getContent().size() == 1, "Total elements in the page must be 1");
        isTrue(title.equals(results.getContent().getFirst().getTitle()), "Element must be Prod 9");
    }

    @Test
    void findByTitleAndPriceTestPriceRange() {
        final Double min = 100d;
        final Double max = 300d;
        final Page<Product> results = productRepository.findByTitleAndPrice("", min, max, PageRequest.of(0, 10));

        notNull(results, "Result must not be null");
        notEmpty(results.getContent(), "Content must not be empty");
        results.forEach(product -> isTrue(
                min <= product.getPrice() && product.getPrice() <= max,
                "Product price %s must be between [%s,%s]".formatted(product.getPrice(), min, max)));
    }
}