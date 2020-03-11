package com.anderson.beernotes.controllers;

import com.anderson.beernotes.entities.Beer;
import com.anderson.beernotes.repositories.BeerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@RequestMapping("/api/beernotes")
public class BeerController {

    @Autowired
    private BeerRepository beerRepo;

    //Insert a beer to DB
    @PostMapping("/insertbeer")
    public void savebeer(@RequestBody Beer beer){
        beerRepo.save(beer);
        System.out.println("Beer Saved Successfully to Beer List");
    }

    //List of all beers from DB
    @GetMapping("/beerlist")
    public Iterable<Beer> getBeerList() {
        return beerRepo.findAll();
    }

    // List beers in beerlist by id
    @GetMapping("/beerlist/{id}")
    public Beer getBeerByID(@PathVariable Integer id) {
        Optional<Beer> beer = beerRepo.findById(id);
        return beer.get();
    }

    //Delete a beer
    @DeleteMapping("/deletebeer/{id}")
    public void deleteBeer(@PathVariable Integer id) {
        beerRepo.deleteById(id);
        System.out.println("Beer Deleted Successfully");
    }

}
