const { HashTable } = require("./index");

describe("HashTable", () => {
  let hashTable;

  beforeEach(() => {
    hashTable = new HashTable();
  });

  it("should set a key/value in the hashtable", () => {
    hashTable.set("name", "John");
    expect(hashTable.get("name")).toBe("John");
  });

  it("should retrieve a value based on a key", () => {
    hashTable.set("name", "John");
    expect(hashTable.get("name")).toBe("John");
  });

  it("should return null for a key that doesn't exist", () => {
    expect(hashTable.get("nonexistentKey")).toBe(null);
  });

  it("should return a list of unique keys", () => {
    hashTable.set("name", "John");
    hashTable.set("age", 30);
    hashTable.set("city", "New York");

    const keys = hashTable.getKeys();
    expect(keys).toContain("name");
    expect(keys).toContain("age");
    expect(keys).toContain("city");
  });

  it("should handle a collision within the hashTable", () => {
    // Set keys that will collide
    hashTable.set("name", "John");
    hashTable.set("name", "Doe");

    // Ensure they are correctly stored and retrievable
    expect(hashTable.get("name")).toBe("Doe");
  });

  it("should retrieve a value from a bucket with a collision", () => {
    // Set keys that will collide
    hashTable.set("name", "John");
    hashTable.set("name", "Doe");

    // Retrieve values from the bucket with a collision
    expect(hashTable.get("name")).toBe("Doe");
  });

  it("should hash a key to an in-range value", () => {
    const hashValue = hashTable.hash("test");
    expect(hashValue).toBeGreaterThanOrEqual(0);
    expect(hashValue).toBeLessThan(100000);
  });
});
