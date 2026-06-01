package com.styleevent.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "vestidos")
public class Vestido {

    private String nombre;
    private double precio;
    private String categoria;
    private String imagen;
    private String descripcion;

    public Vestido() {
    }

    public Vestido(String nombre, double precio, String categoria, String imagen, String descripcion) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public String getCategoria() {
        return categoria;
    }

    public String getImagen() {
        return imagen;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public void setPrecio(double precio) {
        this.precio = precio;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}