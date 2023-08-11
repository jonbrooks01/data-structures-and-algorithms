class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
}
class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    if (animal.species === "dog") {
      this.dogQueue.push(animal);
    } else if (animal.species === "cat") {
      this.catQueue.push(animal);
    }
  }
  dequeue(pref) {
    if (pref === "dog" && this.dogQueue.length > 0) {
      return this.dogQueue.shift();
    } else if (pref === "cat" && this.catQueue.length > 0) {
      return this.catQueue.shift();
    } else return null;
  }
}

module.exports = { AnimalShelter, Animal };
