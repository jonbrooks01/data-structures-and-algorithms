const { fizzBuzz, Node } = require("./k-ary-search.js");

describe("testing k-ary tree", () => {
  test("should handle an empty tree and return null", () => {
    const result = fizzBuzz(null);
    expect(result).toBe(null);
  });
  test("should changes the values according to the function", () => {
    const rootTree = new Node(15);
    rootTree.children.push(new Node(9));
    rootTree.children.push(new Node(10));
    rootTree.children.push(new Node(7));

    const expectedTree = new Node("FizzBuzz");
    expectedTree.children.push(new Node("Fizz"));
    expectedTree.children.push(new Node("Buzz"));
    expectedTree.children.push(new Node("7"));

    const result = fizzBuzz(rootTree);

    // Use a custom recursive function to check the entire tree structure
    function checkTree(node1, node2) {
      expect(node1.value).toEqual(node2.value);

      if (node1.children.length !== node2.children.length) {
        return false;
      }

      for (let i = 0; i < node1.children.length; i++) {
        if (!checkTree(node1.children[i], node2.children[i])) {
          return false;
        }
      }

      return true;
    }

    expect(checkTree(result, expectedTree)).toBe(true);
  });
});
