package com.styleevent.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.MongoId;
import org.springframework.data.mongodb.core.mapping.FieldType;

import java.util.List;

@Document(collection = "ventas")
public class Venta {

    @MongoId(FieldType.OBJECT_ID)
    private String id;

    private String usuarioId;
    private String emailUsuario;
    private List<Carrito> vestidos;
    private double total;
    private String fecha;

    public Venta() {
    }

    public String getId() {
        return id;
    }

    public String getUsuarioId() {
        return usuarioId;
    }

    public String getEmailUsuario() {
        return emailUsuario;
    }

    public List<Carrito> getVestidos() {
        return vestidos;
    }

    public double getTotal() {
        return total;
    }

    public String getFecha() {
        return fecha;
    }

    public void setId(String id) {
        this.id = id;
    }

    public void setUsuarioId(String usuarioId) {
        this.usuarioId = usuarioId;
    }

    public void setEmailUsuario(String emailUsuario) {
        this.emailUsuario = emailUsuario;
    }

    public void setVestidos(List<Carrito> vestidos) {
        this.vestidos = vestidos;
    }

    public void setTotal(double total) {
        this.total = total;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }
}
