class Node {
  constructor(val, id) {
    this.setVal(val);
    this.id = id;
    this.children = [];
  }

  setVal(val) {
    this.val = val;
  }

  setLeft(node) {
    this.left = node;
    this.children.push(node);
  }

  setRight(node) {
    this.right = node;
    this.children.push(node);
  }
}

constructTree = arr => {
  const tree = new Node(arr.shift());
  let prevLevel = [tree];
  let nextLevel = [];
  let id = 0;

  while (arr.length > 0) {
    const currentNode = prevLevel.shift();

    const leftNode = new Node(arr.shift(), id);
    currentNode.setLeft(leftNode);
    nextLevel.push(leftNode);
    id++;

    if (arr.length < 0) {
      break;
    }

    const rightNode = new Node(arr.shift(), id);
    currentNode.setRight(rightNode);
    nextLevel.push(rightNode);
    id++;

    if (prevLevel.length == 0) {
      prevLevel = nextLevel;
      nextLevel = [];
    }
  }

  return tree;
};

const doDFSSearch = (item, tree) => {
  const dfSearch = (source, destination, visited) => {
    console.log("checking:" + source.val + "===" + destination);
    if (source.val === destination) {
      return true;
    }

    if (visited.includes(source.id)) {
      return false;
    }
    visited.push(source.id);

    for (let i = 0; i < source.children.length; i++) {
      if (dfSearch(source.children[i], destination, visited)) {
        return true;
      }
    }

    return false;
  };

  return dfSearch(tree, item, []);
};

const doBFSSearch = (item, tree) => {
  let nextToVisit = [];
  nextToVisit.push(tree);
  const visited = [];

  while (nextToVisit.length > 0) {
    const currentNode = nextToVisit.shift();
    console.log("checking:" + currentNode.val + "===" + item);
    if (currentNode.val === item) {
      return true;
    }
    if (visited.includes(currentNode.id)) {
      return false;
    }
    visited.push(currentNode.id);

    for (let i = 0; i < currentNode.children.length; i++) {
      nextToVisit.push(currentNode.children[i]);
    }
  }

  return false;
};

const tree = constructTree([
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r"
]);

console.log(doBFSSearch("f", tree));
