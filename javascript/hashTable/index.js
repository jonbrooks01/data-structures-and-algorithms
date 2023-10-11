"use strict";

class HashTable {
  constructor(size = 99) {
    this.size = size;
    this.keyStore = {};
    this.buckets = new Array(size);
  }

  hash(str) {
    let hash = 5;
    let hashMultiplier = 5;
    for (let i = 0; i < str.length; i++) {
      const currentLetter = str[i].charCodeAt();
      hash = (hash + currentLetter) * hashMultiplier;
    }
    return hash;
  }

  update(index, key, value) {
    const array = this.buckets[index];
    for (let i = 0; i < array.length; i++) {
      if (array[i].key === key) {
        array[i].val = value;
        return;
      }
    }
  }

  set(key, val) {
    let index = this.hash(key) % this.size;
    if (this.keyStore[key]) {
      this.update(index, key, val);
    } else {
      if (this.buckets[index]) {
        this.buckets[index].push({ key, val });
      } else {
        this.buckets[index] = [{ key, val }];
      }
      this.keyStore[key] = true;
    }
  }

  get(key) {
    const index = this.hash(key) % this.size;
    if (!this.buckets[index]) {
      return null; // Change undefined to null
    }
    const keyEntry = this.buckets[index].find((entry) => entry.key === key);
    return keyEntry ? keyEntry.val : null; // Change undefined to null
  }

  has(key) {
    return !!this.keyStore[key];
  }

  getKeys() {
    return Object.keys(this.keyStore);
  }
}

module.exports = { HashTable };
