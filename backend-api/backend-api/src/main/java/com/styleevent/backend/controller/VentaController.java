package com.styleevent.backend.controller;

import com.styleevent.backend.model.Venta;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/ventas")
@CrossOrigin(origins = "http://localhost:4200")
public class VentaController {

    private final MongoTemplate mongoTemplate;

    public VentaController(MongoTemplate mongoTemplate) {
        this.mongoTemplate = mongoTemplate;
    }

    @GetMapping
    public List<Venta> obtenerVentas() {
        return mongoTemplate.findAll(Venta.class, "ventas");
    }

    @PostMapping
    public Venta crearVenta(@RequestBody Venta venta) {
        venta.setFecha(LocalDateTime.now().toString());
        return mongoTemplate.save(venta, "ventas");
    }
}