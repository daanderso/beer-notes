package com.anderson.beernotes.repositories;

import com.anderson.beernotes.entities.Beer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/*THIS CLASS IS USED TO INITIALLY POPULATE AND TEST APP FUNCTIONALITY*/

@Component
public class BeerPopulator implements CommandLineRunner {

    @Autowired
    BeerRepository beerRepo;

    @Override
    public void run(String... args) throws Exception {


        Beer budlight = new Beer("Bud Light", "American Lager", "USA", "Golden light lager. Easy to drink");
        Beer saporo = new Beer("Saporo","Lager","Japan","golden in color. Smooth");

        beerRepo.save(budlight);
        beerRepo.save(saporo);


    }


}
