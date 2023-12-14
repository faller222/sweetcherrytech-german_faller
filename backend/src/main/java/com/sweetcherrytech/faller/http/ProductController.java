package com.sweetcherrytech.faller.http;

import com.sweetcherrytech.faller.dao.ProductRepository;
import com.sweetcherrytech.faller.model.Product;
import com.sweetcherrytech.faller.util.ProductMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ProductController {


    private final ProductRepository productRepository;


    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping("/products")
    public Page<ProductResponse> getProducts(
            @RequestParam(defaultValue = "") String title,
            @RequestParam(defaultValue = "0") Double minPrice,
            @RequestParam(required = false) Optional<Double> maxPrice,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size
    ) {
        System.out.println("maxPrice: " + maxPrice);
        System.out.println("maxPrice: " + maxPrice.orElse(Double.MAX_VALUE));
        Page<Product> products = productRepository.findByTitleAndPrice(title, minPrice, maxPrice.orElse(Double.MAX_VALUE), PageRequest.of(page, size));
        products.forEach(System.out::println);
        System.out.println(products);
        return products.map(ProductMapper.INSTANCE::toProductResponse);
    }
}
