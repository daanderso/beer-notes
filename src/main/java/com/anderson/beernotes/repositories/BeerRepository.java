package com.anderson.beernotes.repositories;

import com.anderson.beernotes.entities.Beer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeerRepository extends CrudRepository<Beer, Integer> {

}
