const greaterSum = require("./index");

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

describe("greaterSum function", () => {
  it('should return "empty tree" for an empty tree', () => {
    const result = greaterSum(null);
    expect(result).toBe("empty tree");
  });

  it('should return "right" for a tree with only a root node', () => {
    const root = new TreeNode(5);
    const result = greaterSum(root);
    expect(result).toBe("right");
  });

  it('should return "left" for a tree with a greater sum on the left side', () => {
    const root = new TreeNode(10, new TreeNode(8), new TreeNode(3));
    const result = greaterSum(root);
    expect(result).toBe("left");
  });

  it('should return "right" for a tree with a greater sum on the right side', () => {
    const root = new TreeNode(5, new TreeNode(7), new TreeNode(10));
    const result = greaterSum(root);
    expect(result).toBe("right");
  });

  it("should handle complex trees with the correct result", () => {
    const root = new TreeNode(0);
    root.left = new TreeNode(1);
    root.right = new TreeNode(2);
    root.left.left = new TreeNode(3);
    root.left.right = new TreeNode(4);
    root.right.left = new TreeNode(5);

    const result = greaterSum(root);
    expect(result).toBe("left");
  });
});
