const { BinarySearchTree, Node } = require("./binary-search");

const tree = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 4,
      left: null,
      right: null,
    },
    right: {
      value: 5,
      left: null,
      right: null,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
      left: null,
      right: null,
    },
    right: null,
  },
};

describe(" Binary Tree Functionality", () => {
  let bst;

  beforeEach(() => {
    bst = new BinarySearchTree();
  });

  test("can instantiate an empty tree", () => {
    expect(bst.root).toBeNull();
  });

  test("can instantiate a tree with a single root node", () => {
    bst.add(5);
    expect(bst.root).toEqual(new Node(5));
  });

  test("can add left and right children to a node in a Binary Search Tree", () => {
    bst.add(5);
    bst.add(3);
    bst.add(7);
    expect(bst.root.left.value).toBe(3);
    expect(bst.root.right.value).toBe(7);
  });

  test("can perform a pre-order traversal", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    expect(bst.preOrder()).toEqual([10, 5, 3, 7, 15]);
  });

  test("can perform a in-order traversal", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    expect(bst.inOrder()).toEqual([3, 5, 7, 10, 15]);
  });

  test("can perform a post-order traversal", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    expect(bst.postOrder()).toEqual([3, 7, 5, 15, 10]);
  });
  test("returns true for the contains method with an existing node value", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(5)).toBe(true);
  });

  test("returns false for the contains method with a non-existing node value", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    expect(bst.contains(7)).toBe(false);
  });

  test("returns the max value in a stack", () => {
    bst.add(10);
    bst.add(5);
    bst.add(15);
    bst.add(3);
    bst.add(7);
    bst.findMax();
    expect(bst.findMax()).toBe(15);
  });

  test("returns an empty array", () => {
    bst.breadthFirst();
    expect(bst.breadthFirst()).toEqual(expect.arrayContaining([]));
  });
  test("Successfully traverses an array with breadthFirst", () => {
    const results = bst.breadthFirst(tree);
    expect(results).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
