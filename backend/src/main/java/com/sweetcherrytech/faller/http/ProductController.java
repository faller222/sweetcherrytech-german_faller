package com.sweetcherrytech.faller.http;

import com.sweetcherrytech.faller.service.ProductService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService productService) {
        this.service = productService;
    }

    @GetMapping("/products")
    @CrossOrigin(origins = "*")
    public ResponseEntity<Page<ProductResponse>> getProducts(
            @RequestParam(required = false) Optional<String> title,
            @RequestParam(required = false) Optional<Double> minPrice,
            @RequestParam(required = false) Optional<Double> maxPrice,
            @RequestParam(defaultValue = "0") Integer page,
            @RequestParam(defaultValue = "10") Integer size
    ) {
        try {
            final Page<ProductResponse> products = service.getProducts(title, minPrice, maxPrice, PageRequest.of(page, size));
            return ResponseEntity.ok().body(products);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
