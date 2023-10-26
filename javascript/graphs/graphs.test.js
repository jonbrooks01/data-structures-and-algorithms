const Graph = require("./graphs");

describe("graph implementation", () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test("we can add verticies", () => {
    graph.addVertex(3);
    graph.addVertex(5);
    expect(graph.adjacencyList.size).toBe(2);
  });
  test("we can return an array of graph verticies", () => {
    graph.addVertex(3);
    graph.addVertex(5);
    expect(graph.getVerticies().length).toEqual(2);
  });

  it("should add an edge between two vertices", () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    graph.addEdge(vertexA, vertexB, 3);

    const edgesA = graph.getEdges(vertexA);
    const edgesB = graph.getEdges(vertexB);

    expect(edgesA.length).toBe(1);
    expect(edgesB.length).toBe(0); // Assuming this is an unidirectional edge

    expect(edgesA[0].weight).toBe(3);
    expect(edgesA[0].from).toBe(vertexA);
    expect(edgesA[0].to).toBe(vertexB);
  });

  it("should add an undirected edge between two vertices", () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    graph.addUndirectedEdge(vertexA, vertexB, 3);

    const edgesA = graph.getEdges(vertexA);
    const edgesB = graph.getEdges(vertexB);

    expect(edgesA.length).toBe(1);
    expect(edgesB.length).toBe(1); // Should be bidirectional

    expect(edgesA[0].weight).toBe(3);
    expect(edgesA[0].from).toBe(vertexA);
    expect(edgesA[0].to).toBe(vertexB);

    expect(edgesB[0].weight).toBe(3);
    expect(edgesB[0].from).toBe(vertexB);
    expect(edgesB[0].to).toBe(vertexA);
  });

  it("should get all vertices in the graph", () => {
    graph.addVertex(1);
    graph.addVertex(2);
    graph.addVertex(3);

    const vertices = graph.getVerticies();

    expect(vertices).toContain(1);
    expect(vertices).toContain(2);
    expect(vertices).toContain(3);
  });

  it("should get neighbors of a vertex", () => {
    const vertexA = graph.addVertex(1);
    const vertexB = graph.addVertex(2);
    graph.addUndirectedEdge(vertexA, vertexB, 3);

    const neighborsA = graph.getNeighbors(vertexA);

    expect(neighborsA).toContain(vertexB);
  });

  it("should return the size of the graph", () => {
    graph.addVertex(1);
    graph.addVertex(2);

    expect(graph.size()).toBe(2);
  });
});
