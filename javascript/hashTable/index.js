"use strict";

class Hashtable {
  constructor(size = 99) {
    this.size = size;
    this.keys = {};
    this.buckets = new Array(size);
  }

  hash(str) {
    let hash = 5;
    let hashMultiplier = 599;
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i].charCodeAt();
      hash = (hash + currentLetter) * hashMultiplier;
    }
    return hash;
  }

  update(index, key, value) {
    // look through the array, find a value where key === key, update the value
    const array = this.buckets[index];
    for (let i = 0; i < array.length; i++) {
      if (array[i].key === key) {
        array[i].val = value;
        return;
      }
    }
  }

  //   Arguments: key, value
  // Returns: nothing
  // This method should hash the key, and set the key and value pair in the table, handling collisions as needed.
  // Should a given key already exist, replace its value from the value argument given to this method.
  set(key, val) {
    let index = this.hash(key) % this.size;
    // if there is something already in the space in the bucket array
    if (this.keys[key]) {
      // I already have this key in my table
      // replace the existing one with the new one rather than adding a new entry
      // go to the index in the bucket and find the entry where key === key, and replace the value
      this.update(index, key, val);
    } else {
      // Key doesn't exist, create a new entry
      if (this.buckets[index]) {
        this.buckets[index].push({ key, val });
      } else {
        this.buckets[index] = [{ key, val }];
      }
      this.keys[key] = true;
    }
  }

  get(key) {
    const index = this.hash(key) % this.size;
    if (!this.buckets[index]) {
      return undefined;
    }
    const keyEntry = this.buckets[index].find((entry) => entry.key === key);
    return keyEntry ? keyEntry.val : undefined;
  }

  has(key) {
    return !!this.keys[key];
  }

  keys() {
    return Object.keys(this.keys);
  }
}

module.exports = { Hashtable };
