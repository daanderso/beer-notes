package com.anderson.beernotes.entities;


import lombok.Getter;
import lombok.NoArgsConstructor;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.util.Date;

@Entity
@Getter
@NoArgsConstructor
public class Beer {

    @Id
    @GeneratedValue
    private int id;

    private String name;
    private String style;
    private String origin;
    private String note;


    public Beer(String name,String style, String origin, String note){
        this.name = name;
        this.style = style;
        this.origin = origin;
        this.note = note;
    }




}
