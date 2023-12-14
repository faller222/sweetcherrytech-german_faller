package com.sweetcherrytech.faller.service;

import com.sweetcherrytech.faller.dao.ProductRepository;
import com.sweetcherrytech.faller.http.ProductResponse;
import com.sweetcherrytech.faller.model.Product;
import com.sweetcherrytech.faller.util.ProductMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class ProductService {

    private final ProductRepository repository;


    public ProductService(ProductRepository productRepository) {
        this.repository = productRepository;
    }

    public Page<ProductResponse> getProducts(final Optional<String> title, final Optional<Double> minPrice, final Optional<Double> maxPrice, final PageRequest pageRequest) {

        final Page<Product> products = repository.findByTitleAndPrice(
                title.orElse(""),
                minPrice.orElse(0d),
                maxPrice.orElse(Double.MAX_VALUE),
                pageRequest);

        return products.map(ProductMapper.INSTANCE::toProductResponse);
    }
}
