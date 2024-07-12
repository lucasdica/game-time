package com.example.demo.model;

public class Juegos {
    private Integer id;
    private String titulo;
    private Integer anio;
    private String portada;
    private String desarrollador;

    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getTitulo() {
        return titulo;
    }
    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }
    public int getAnio() {
        return anio;
    }
    public void setAnio(int anio) {
        this.anio = anio;
    }
    public String getPortada() {
        return portada;
    }
    public void setPortada(String portada) {
        this.portada = portada;
    }
    public String getDesarrollador() {
        return desarrollador;
    }
    public void setDesarrollador(String desarrollador) {
        this.desarrollador = desarrollador;
    }

    //Constructores

    public Juegos(Integer id, String titulo, Integer anio, String portada, String desarrollador) {
        this.id = id;
        this.titulo = titulo;
        this.anio = anio;
        this.portada = portada;
        this.desarrollador = desarrollador;
    }

    public Juegos(String titulo, Integer anio, String portada, String desarrollador) {
        this.titulo = titulo;
        this.anio = anio;
        this.portada = portada;
        this.desarrollador = desarrollador;
    }

    public Juegos(Integer id) {
        this.id = id;
    }
}

