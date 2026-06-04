package com.styleevent.backend.controller;

import com.styleevent.backend.model.Carrito;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/carrito")
@CrossOrigin(origins = "http://localhost:4200")

public class CarritoController {

    private final MongoTemplate mongoTemplate;


    public CarritoController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @GetMapping("/{usuarioId}")
    public List<Carrito> obtenerCarrito(@PathVariable String usuarioId) {

        Query query = new Query(
                Criteria.where("usuarioId").is(usuarioId)
        );

        return mongoTemplate.find(query, Carrito.class, "carrito");
    }



    @PostMapping
    public Carrito agregarCarrito(@RequestBody Carrito carrito) {

        return mongoTemplate.save(carrito, "carrito");
    }



    @DeleteMapping("/{usuarioId}/{vestidoId}")
    public void eliminarCarrito(
            @PathVariable String usuarioId,
            @PathVariable String vestidoId) {


        Query query = new Query(
                Criteria.where("usuarioId").is(usuarioId)
                        .and("vestidoId").is(vestidoId)
        );


        mongoTemplate.remove(query, Carrito.class, "carrito");
    }


    @DeleteMapping("/vaciar/{usuarioId}")
    public void vaciarCarrito(@PathVariable String usuarioId) {


        Query query = new Query(
                Criteria.where("usuarioId").is(usuarioId)
        );


        mongoTemplate.remove(query, Carrito.class, "carrito");
    }
}