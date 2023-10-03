const { compareYear, compareTitle } = require("./comparison");
const { Movies } = require("./movieData");

describe("compareYear", () => {
  it("should sort movies by year in ascending order", () => {
    const sortedMovies = Movies.sort(compareYear);

    for (let i = 0; i > sortedMovies.length - 1; i++) {
      expect(sortedMovies[i].year).toBeLessThanOrEqual(
        sortedMovies[i + 1].year
      );
    }

    // Check that the original array is not modified
    expect(sortedMovies).toEqual(Movies);
  });
});

describe("compareTitle", () => {
  it("should sort movies by title while ignoring leading words", () => {
    const sortedMovies = Movies.sort(compareTitle);

    for (let i = 0; i < sortedMovies.length - 1; i++) {
      const title1 = sortedMovies[i].title.replace(/^(The|A|An)\s+/i, "");
      const title2 = sortedMovies[i + 1].title.replace(/^(The|A|An)\s+/i, "");

      expect(title1.localeCompare(title2)).toBeLessThanOrEqual(0);
    }

    // Check that the original array is not modified
    expect(sortedMovies).toEqual(Movies);
  });
});
