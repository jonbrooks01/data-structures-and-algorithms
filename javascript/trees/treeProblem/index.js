// Given a binary tree with the root node having a value of zero, and all other nodes having numeric values, traverse the tree and determine which side from the root has a greater sum value. Return “left” or “right” depending on which side has the greater sum.

function greaterSum(root) {
  if (root === null) {
    return "empty tree";
  }

  const leftSum = calculateSum(root.left);
  const rightSum = calculateSum(root.right);

  return leftSum > rightSum ? "left" : "right";
}

function calculateSum(node) {
  if (node === null) {
    return 0;
  }

  const leftSum = calculateSum(node.left);
  const rightSum = calculateSum(node.right);

  return leftSum + rightSum + node.value;
}

module.exports = greaterSum;
