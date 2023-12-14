package com.sweetcherrytech.faller.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "products")
@Data
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(length = 50, nullable = false)
    private String title;

    @Column(nullable = false)
    private Double price;

    @Column(unique = true, length = 50)
    private String sku;

    @Column(nullable = false)
    private Long quantity;

    @Lob
    private String description;

}