package com.example.demo;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dao.JuegosDAO;
import com.example.demo.model.Juegos;

@RestController
public class JuegosController {
    @CrossOrigin(origins = "*")
    @GetMapping("/listarJuegos")
    public List<Juegos> listarJuegos() {
        JuegosDAO juegosDAO=new JuegosDAO();
        return juegosDAO.listar();
    }
    
    @CrossOrigin(origins = "*")
    @PostMapping("/addJuegos")
    public void addJuegos(@RequestBody String titulo,  String desarrollador, String portada, Integer anio) {
        Juegos jue=new Juegos(titulo, Integer.valueOf(anio), portada, desarrollador);

        JuegosDAO juegosDAO=new JuegosDAO();
        juegosDAO.add(jue);

    }

    @CrossOrigin(origins = "*")
    @DeleteMapping("/delJuegos/{id}")
    public void delJuegos(@PathVariable("id") Integer id) {
        Juegos jue=new Juegos(id);

        JuegosDAO juegosDAO=new JuegosDAO();
        juegosDAO.del(jue);

    }
}
