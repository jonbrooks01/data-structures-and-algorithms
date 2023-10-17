function treeIntersection(tree1, tree2) {
  const commonValue = [];
  const valueMap = {};

  function treeSearch(node, map) {
    if (node) {
      map[node.value] = true;
      treeSearch(node.left, map);
      treeSearch(node.right, map);
    }
  }

  function traverseTree(node, map) {
    if (node) {
      if (map[node.value]) {
        commonValue.push(node.value);
      }
      traverseTree(node.left, map);
      traverseTree(node.right, map);
    }
  }

  treeSearch(tree1, valueMap);
  traverseTree(tree2, valueMap);

  return commonValue;
}

module.exports = treeIntersection;
