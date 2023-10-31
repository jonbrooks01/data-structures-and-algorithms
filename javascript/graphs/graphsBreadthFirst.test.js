// graph.test.js

const Graph = require("./graphs");

describe("Graph breadthFirst method", () => {
  it("should perform breadth-first traversal and return the correct order", () => {
    const graph = new Graph();

    const nodeA = graph.addVertex("A");
    const nodeB = graph.addVertex("B");
    const nodeC = graph.addVertex("C");
    const nodeD = graph.addVertex("D");
    const nodeE = graph.addVertex("E");

    graph.addUndirectedEdge(nodeA, nodeB);
    graph.addUndirectedEdge(nodeA, nodeC);
    graph.addUndirectedEdge(nodeB, nodeD);
    graph.addUndirectedEdge(nodeC, nodeE);

    const result = graph.breadthFirst(nodeA);
    const resultValues = result.map((node) => node.value);

    expect(resultValues).toEqual(["A", "B", "C", "D", "E"]);
  });

  it("should return an empty array when called on an empty graph", () => {
    const graph = new Graph();
    const nodeA = graph.addVertex("A");
    const result = graph.breadthFirst(nodeA);
    expect(result).toEqual([nodeA]);
  });

  it("should handle a single-node graph", () => {
    const graph = new Graph();
    const nodeA = graph.addVertex("A");
    const result = graph.breadthFirst(nodeA);
    expect(result).toEqual([nodeA]);
  });
});
