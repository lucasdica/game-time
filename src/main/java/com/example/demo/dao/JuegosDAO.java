package com.example.demo.dao;

import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.example.demo.db.ConnectorDB;
import com.example.demo.model.Juegos;

public class JuegosDAO {
     public List<Juegos> listar() {
        try {
            
            Statement st=ConnectorDB.getSt();
            ResultSet rs=st.executeQuery("Select * from Juegos");
            
            // recorro todas las peliculas
            // creo un objeto Pelicula x cada peli o fila
            List<Juegos> listjuegos=new ArrayList<Juegos>();
            while (rs.next()) {
                // orm: mapeo relacional objeto, lo hacen framework hibernate, jpa
                Juegos jue=new Juegos(rs.getInt("id"), rs.getString("titulo"), rs.getInt("anio"), rs.getString("desarrollador"), rs.getString("portada"));
                listjuegos.add(jue);
            }         
            
            return listjuegos;

        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
        
    }

    public Boolean add(Juegos jue) {
        try {
            Statement st=ConnectorDB.getSt();
            Integer cantInsert=st.executeUpdate("INSERT INTO juegos (titulo, desarrollador, portada) VALUES ('"+jue.getTitulo()+"', "+jue.getDesarrollador()+", '"+jue.getPortada()+"')");
            
            Boolean insertOk=(cantInsert==1);

            return insertOk;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }

    public Boolean del(Juegos jue) {
        try {
            Statement st=ConnectorDB.getSt();
            Integer cantDel=st.executeUpdate("DELETE FROM juegos WHERE id="+jue.getId());
            
            Boolean delOk=(cantDel==1);

            return delOk;
        } catch (Exception e) {
            e.printStackTrace();
        }

        return false;
    }
}
