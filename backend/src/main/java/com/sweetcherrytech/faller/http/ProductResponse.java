package com.sweetcherrytech.faller.http;

import lombok.Data;
import java.io.Serializable;

@Data
public class ProductResponse implements Serializable {

    private Long id;

    private String title;

    private Double price;

    private Long quantity;

}

