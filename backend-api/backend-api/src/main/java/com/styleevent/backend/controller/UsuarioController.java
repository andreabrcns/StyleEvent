package com.styleevent.backend.controller;

import com.styleevent.backend.model.Usuario;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/usuarios")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController {

    private final MongoTemplate mongoTemplate;

    public UsuarioController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @PostMapping("/login")
    public Usuario login(@RequestBody Usuario usuario) {
        Query query = new Query(
                Criteria.where("email").is(usuario.getEmail())
                        .and("password").is(usuario.getPassword())
        );

        return mongoTemplate.findOne(query, Usuario.class, "usuarios");
    }

    @PostMapping("/registro")
    public Usuario registrar(@RequestBody Usuario usuario) {
        usuario.setRol("CLIENTE");
        return mongoTemplate.save(usuario, "usuarios");
    }
}