/*
This code validates if a given binary search tree, is actually a valid tree.
To ensure a tree is valid, for for each node  we need to check that:
- left side is withing range of [parent range start || INT_MIN, root val - 1]
- right side is withing range of [root val + 1, parent range end || INT_MAX]
*/

class Node {
  constructor (val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  insert (val) {
    if (val <= this.val) {
      if (this.leftNode === null) {
        this.leftNode = new Node (val);
      } else {
        this.leftNode.insert (val);
      }
    } else {
      if (this.rightNode === null) {
        this.rightNode = new Node (val);
      } else {
        this.rightNode.insert (val);
      }
    }
  }
}

const isBST = (node, min, max) => {
  if (node === null) {
    return true;
  }

  console.log (
    'checking node: ' + node.val + ' for min: ' + min + ' and max: ' + max
  );
  if (node.val < min || node.val > max) {
    return false;
  }

  return (
    isBST (node.leftNode, min, node.val - 1) &&
    isBST (node.rightNode, node.val + 1, max)
  );
};

const tree = new Node (50);
tree.insert (10);
tree.insert (80);
tree.insert (5);
tree.insert (30);
tree.insert (70);
tree.insert (90);
tree.insert (20);
tree.insert (40);
tree.insert (86);

console.log (isBST (tree, 0, 10000));
