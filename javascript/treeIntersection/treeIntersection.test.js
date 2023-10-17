const treeIntersection = require("./index"); // Import the function and TreeNode class
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

describe("findCommonValues", () => {
  // Test case 1: Common values found
  it("should find common values between two binary trees", () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(2);
    tree2.left = new TreeNode(3);
    tree2.right = new TreeNode(4);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([2, 3]);
  });

  // Test case 2: No common values
  it("should return an empty array when no common values are found", () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);
    tree1.right = new TreeNode(3);

    const tree2 = new TreeNode(4);
    tree2.left = new TreeNode(5);
    tree2.right = new TreeNode(6);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([]);
  });

  // Test case 3: Common values found in a single node
  it("should find common values when only a single node is common", () => {
    const tree1 = new TreeNode(1);
    tree1.left = new TreeNode(2);

    const tree2 = new TreeNode(2);
    tree2.left = new TreeNode(3);

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual([2]);
  });
});
