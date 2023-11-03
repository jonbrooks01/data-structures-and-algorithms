const businessTrip = require("./graphTrip");

describe("businessTrip", () => {
  const graph = {
    A: { B: 10, C: 15 },
    B: { C: 5, D: 20 },
    C: { D: 10 },
    D: {},
  };

  it("should return the correct cost for a valid trip", () => {
    expect(businessTrip(graph, ["A", "B", "C"])).toBe(15);
    expect(businessTrip(graph, ["A", "B", "C", "D"])).toBe(25);
  });

  it("should return null for an invalid trip", () => {
    expect(businessTrip(graph, [])).toBe(null);
    expect(businessTrip(graph, ["B", "A"])).toBe(null);
    expect(businessTrip(graph, ["B", "C", "A"])).toBe(null);
  });

  it("should return null if a city is not in the graph", () => {
    expect(businessTrip(graph, ["A", "B", "E"])).toBe(null);
    expect(businessTrip(graph, ["X", "Y", "Z"])).toBe(null);
  });
});
