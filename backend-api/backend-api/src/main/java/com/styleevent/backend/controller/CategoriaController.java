package com.styleevent.backend.controller;

import com.styleevent.backend.model.Categoria;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/categorias")
@CrossOrigin(origins = "http://localhost:4200")
public class CategoriaController {

    private final MongoTemplate mongoTemplate;

    public CategoriaController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping
    public List<Categoria> obtenerCategorias() {
        return mongoTemplate.findAll(Categoria.class, "categorias");
    }
}