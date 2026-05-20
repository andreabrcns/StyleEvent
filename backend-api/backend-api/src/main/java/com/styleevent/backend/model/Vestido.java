package com.styleevent.backend.model;

public class Vestido {

    private String id;
    private String nombre;
    private double precio;
    private String categoria;
    private String imagen;
    private String descripcion;

    public Vestido() {
    }

    public Vestido(String id, String nombre, double precio, String categoria, String imagen, String descripcion) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }

    public String getId() {
        return id;
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
}