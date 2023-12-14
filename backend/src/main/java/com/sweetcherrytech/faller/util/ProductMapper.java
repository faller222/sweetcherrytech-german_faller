package com.sweetcherrytech.faller.util;

import com.sweetcherrytech.faller.http.ProductResponse;
import com.sweetcherrytech.faller.model.Product;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper( ProductMapper.class );

    ProductResponse toProductResponse(Product product);

    Product toProduct(ProductResponse productVO);
}