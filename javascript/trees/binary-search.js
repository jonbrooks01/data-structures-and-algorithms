class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.next = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    const result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    };
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
  }

  add(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(value) {
    let currentNode = this.root;
    while (currentNode) {
      if (value === currentNode.value) {
        return true;
      } else if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return false;
  }
  findMax() {
    if (!this.root) {
      throw new Error("Tree is empty");
    }

    return this._findMaxValue(this.root);
  }
  _findMaxValue(node) {
    if (!node) {
      return Number.NEGATIVE_INFINITY;
    }

    const currentValue = node.value;
    const leftMax = this._findMaxValue(node.left);
    const rightMax = this._findMaxValue(node.right);

    return Math.max(currentValue, leftMax, rightMax);
  }
  breadthFirst(tree) {
    if (!tree) {
      return [];
    }
    const queue = [tree];
    const results = [];

    while (queue.length > 0) {
      const node = queue.shift();
      results.push(node.value);

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    return results;
  }
}

// findMax() { NON-Recursive
//   if (!this.root) {
//     throw new Error("Tree is empty");
//   }

//   let maxValue = Number.NEGATIVE_INFINITY;

//   const stack = [this.root];

//   while (stack.length > 0) {
//     const node = stack.pop();
//     maxValue = Math.max(maxValue, node.value);

//     if (node.left) {
//       stack.push(node.left);
//     }

//     if (node.right) {
//       stack.push(node.right);
//     }
//   }

//   return maxValue;
// }

module.exports = { BinarySearchTree, Node };
