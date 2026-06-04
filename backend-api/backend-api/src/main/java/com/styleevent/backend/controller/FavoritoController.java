package com.styleevent.backend.controller;

import com.styleevent.backend.model.Favorito;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/favoritos")
@CrossOrigin(origins = "http://localhost:4200")
public class FavoritoController {

    private final MongoTemplate mongoTemplate;

    public FavoritoController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping("/{usuarioId}")
    public List<Favorito> obtenerFavoritos(@PathVariable String usuarioId) {
        Query query = new Query(Criteria.where("usuarioId").is(usuarioId));
        return mongoTemplate.find(query, Favorito.class, "favoritos");
    }

    @PostMapping
    public Favorito guardarFavorito(@RequestBody Favorito favorito) {
        return mongoTemplate.save(favorito, "favoritos");
    }

    @DeleteMapping("/{usuarioId}/{vestidoId}")
    public void eliminarFavorito(@PathVariable String usuarioId, @PathVariable String vestidoId) {
        Query query = new Query(
                Criteria.where("usuarioId").is(usuarioId)
                        .and("vestidoId").is(vestidoId)
        );

        mongoTemplate.remove(query, Favorito.class, "favoritos");
    }
}