package com.styleevent.backend.controller;

import com.styleevent.backend.model.Vestido;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;

import java.util.List;

@RestController
@RequestMapping("/api/vestidos")
@CrossOrigin(origins = "http://localhost:4200")

public class VestidoController {

    private final MongoTemplate mongoTemplate;

    public VestidoController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }


    @GetMapping
    public List<Vestido> obtenerVestidos() {
        return mongoTemplate.findAll(Vestido.class, "vestidos");
    }
    @GetMapping("/{id}")
        public Vestido obtenerVestidoPorId(@PathVariable String id) {
            Query query = new Query(Criteria.where("_id").is(new org.bson.types.ObjectId(id)));
            return mongoTemplate.findOne(query, Vestido.class, "vestidos");
        }


    @PostMapping
    public Vestido crearVestido(@RequestBody Vestido vestido) {
        return mongoTemplate.save(vestido, "vestidos");
    }
    @DeleteMapping("/{id}")
        public void eliminarVestido(@PathVariable String id) {
            Query query = new Query(Criteria.where("_id").is(new org.bson.types.ObjectId(id)));
            mongoTemplate.remove(query, Vestido.class, "vestidos");
    }
    @PutMapping("/{id}")
        public Vestido editarVestido(@PathVariable String id, @RequestBody Vestido vestido) {
            vestido.setId(id);
            return mongoTemplate.save(vestido, "vestidos");
    }
}