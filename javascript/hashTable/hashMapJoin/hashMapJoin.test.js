const leftJoin = require("./index"); // Import the leftJoin function

describe("leftJoin", () => {
  it("should perform a LEFT JOIN on synonyms and antonyms with matching keys", () => {
    const synonyms = {
      happy: "joyful",
      angry: "furious",
      smart: "intelligent",
    };

    const antonyms = {
      happy: "sad",
      smart: "dumb",
    };

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual({
      happy: { synonym: "joyful", antonym: "sad" },
      angry: { synonym: "furious", antonym: null },
      smart: { synonym: "intelligent", antonym: "dumb" },
    });
  });

  it("should include keys from synonyms with null antonyms when not found in antonyms", () => {
    const synonyms = {
      happy: "joyful",
      angry: "furious",
      smart: "intelligent",
    };

    const antonyms = {
      happy: "sad",
    };

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual({
      happy: { synonym: "joyful", antonym: "sad" },
      angry: { synonym: "furious", antonym: null },
      smart: { synonym: "intelligent", antonym: null },
    });
  });

  it("should handle an empty synonyms map", () => {
    const synonyms = {};
    const antonyms = {
      happy: "sad",
    };

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual({});
  });

  it("should handle an empty antonyms map", () => {
    const synonyms = {
      happy: "joyful",
    };
    const antonyms = {};

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual({
      happy: { synonym: "joyful", antonym: null },
    });
  });

  it("should handle both empty maps", () => {
    const synonyms = {};
    const antonyms = {};

    const result = leftJoin(synonyms, antonyms);

    expect(result).toEqual({});
  });
});
