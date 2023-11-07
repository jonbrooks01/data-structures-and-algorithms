const Node = require("./depthFirst"); // Assuming you have the Node class in a separate file

describe("Node - depthFirstSearch", () => {
  it("should return an array with node names in depth-first order", () => {
    const root = new Node("A");
    root.addChild("B").addChild("C").addChild("D");
    root.children[0].addChild("E").addChild("F");
    root.children[2].addChild("G").addChild("H");

    const result = root.depthFirstSearch([]);
    expect(result).toEqual(["A", "B", "E", "F", "C", "D", "G", "H"]);
  });

  it("should work for a single node tree", () => {
    const root = new Node("A");
    const result = root.depthFirstSearch([]);
    expect(result).toEqual(["A"]);
  });

  it("should work for an empty tree", () => {
    const root = new Node("A");
    const result = root.depthFirstSearch([]);
    expect(result).toEqual(["A"]);
  });

  // Add more test cases as needed
});
