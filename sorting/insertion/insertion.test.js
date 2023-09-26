const { insert, insertionSort } = require("./insertion");

describe("insert function", () => {
  it("should insert a value into an empty array", () => {
    const sorted = [];
    insert(sorted, 5);
    expect(sorted).toEqual([5]);
  });

  it("should insert a value at the beginning of the array", () => {
    const sorted = [5, 10, 15];
    insert(sorted, 2);
    expect(sorted).toEqual([2, 5, 10, 15]);
  });

  it("should insert a value in the middle of the array", () => {
    const sorted = [2, 5, 15];
    insert(sorted, 10);
    expect(sorted).toEqual([2, 5, 10, 15]);
  });

  it("should insert a value at the end of the array", () => {
    const sorted = [2, 5, 10];
    insert(sorted, 15);
    expect(sorted).toEqual([2, 5, 10, 15]);
  });
});

// Test cases for the insertionSort function
describe("insertionSort function", () => {
  it("should sort an array in ascending order", () => {
    const input = [12, 11, 13, 5, 6];
    const sortedArray = insertionSort(input);
    expect(sortedArray).toEqual([5, 6, 11, 12, 13]);
  });

  it("should handle an empty array", () => {
    const input = [];
    const sortedArray = insertionSort(input);
    expect(sortedArray).toEqual([]);
  });

  it("should handle an array with a single element", () => {
    const input = [7];
    const sortedArray = insertionSort(input);
    expect(sortedArray).toEqual([7]);
  });

  it("should handle an array with duplicate elements", () => {
    const input = [7, 4, 4, 9, 2, 7, 1];
    const sortedArray = insertionSort(input);
    expect(sortedArray).toEqual([1, 2, 4, 4, 7, 7, 9]);
  });
});
