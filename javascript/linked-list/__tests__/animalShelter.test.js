"use strict";

const { AnimalShelter, Animal } = require("../animalShelter.js");

describe("Animal Shelter", () => {
  let shelter;

  beforeEach(() => {
    shelter = new AnimalShelter();
  });

  it("should enqueue dogs and cats correctly", () => {
    const dog1 = new Animal("rex", "dog");
    const cat1 = new Animal("peanut", "cat");

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    expect(shelter.dogQueue).toHaveLength(1);
    expect(shelter.catQueue).toHaveLength(1);
  });
  it("should dequeue dogs and cats based on preference", () => {
    const dog1 = new Animal("rex", "dog");
    const cat1 = new Animal("peanut", "cat");

    shelter.enqueue(dog1);
    shelter.enqueue(cat1);

    const dequeuedDog = shelter.dequeue("dog");
    const dequeuedCat = shelter.dequeue("cat");

    expect(dequeuedDog).toEqual(dog1);
    expect(dequeuedCat).toEqual(cat1);

    expect(shelter.dogQueue).toHaveLength(0);
    expect(shelter.catQueue).toHaveLength(0);
  });
});
