const { mergeSort, merge } = require("./merge.js");

describe("Merge Sort", () => {
  it("should sort an empty array", () => {
    const arr = [];
    mergeSort(arr);
    expect(arr).toEqual([]);
  });

  it("should correctly sort an array with a single element", () => {
    const arr = [1];
    mergeSort(arr);
    expect(arr).toEqual([1]);
  });

  it("should correctly sort an array of multiple elements", () => {
    const arr = [12, 11, 13, 5, 6, 7];
    mergeSort(arr);
    expect(arr).toEqual([5, 6, 7, 11, 12, 13]);
  });

  it("should correctly merge two arrays", () => {
    const left = [2, 4, 6];
    const right = [1, 3, 5];
    const arr = [];
    merge(left, right, arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("should correctly merge two arrays of different lengths", () => {
    const left = [2, 4, 6];
    const right = [1, 3];
    const arr = [];
    merge(left, right, arr);
    expect(arr).toEqual([1, 2, 3, 4, 6]);
  });
});
