const { Hashtable } = require("./index");

describe("Hashtable", () => {
  let hashtable;

  beforeEach(() => {
    hashtable = new Hashtable();
  });

  it("should set and get values correctly", () => {
    hashtable.set("name", "John");
    expect(hashtable.get("name")).toBe("John");

    hashtable.set("age", 30);
    expect(hashtable.get("age")).toBe(30);
  });

  it("should handle collisions and update values", () => {
    hashtable.set("name", "John");
    hashtable.set("age", 30);

    // Simulate a collision for the same index
    hashtable.set("naem", "Doe");

    expect(hashtable.get("name")).toBe("John");
    expect(hashtable.get("naem")).toBe("Doe");
    expect(hashtable.get("age")).toBe(30);

    // Update the value for 'naem'
    hashtable.set("naem", "Smith");
    expect(hashtable.get("naem")).toBe("Smith");
  });

  it("should check if a key exists", () => {
    hashtable.set("name", "John");
    hashtable.set("age", 30);

    expect(hashtable.has("name")).toBe(true);
    expect(hashtable.has("age")).toBe(true);
    expect(hashtable.has("city")).toBe(false);
  });

  it("should return an array of keys", () => {
    hashtable.set("name", "John");
    hashtable.set("age", 30);

    expect(hashtable.keys()).toContain("name");
    expect(hashtable.keys()).toContain("age");
  });
});
