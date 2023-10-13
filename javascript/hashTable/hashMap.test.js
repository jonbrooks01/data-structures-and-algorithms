// Import your function
const repeatedWord = require("./hashmap");

// Test suite
describe("repeatedWord function", () => {
  // Test case 1: Testing when there is a repeated word
  test("Finds the first repeated word", () => {
    const inputString =
      "This is an example. This is a test. The word 'this' is repeated.";
    const result = repeatedWord(inputString);
    expect(result).toBe("this");
  });

  // Test case 2: Testing when there are no repeated words
  test("No repeated words in the input string", () => {
    const inputString = "This is a test with no repeated words.";
    const result = repeatedWord(inputString);
    expect(result).toBe("No words match");
  });

  // Test case 3: Testing when the input string is empty
  test("Empty input string", () => {
    const inputString = "";
    const result = repeatedWord(inputString);
    expect(result).toBe("No words match");
  });
});
