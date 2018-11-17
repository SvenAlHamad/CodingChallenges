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

  find (val) {
    if (val == this.val) {
      return true;
    } else if (val < this.val) {
      if (this.leftNode !== null) {
        return this.leftNode.find (val);
      } else {
        return false;
      }
    } else {
      if (this.rightNode !== null) {
        return this.rightNode.find (val);
      } else {
        return false;
      }
    }
    return false;
  }

  transvert () {
    if (this.leftNode !== null) {
      this.leftNode.transvert ();
    }

    console.log (this.val);

    if (this.rightNode !== null) {
      this.rightNode.transvert ();
    }
  }
}

const n = new Node (10);
n.insert (5);
n.insert (15);
n.insert (8);
n.transvert ();

console.log (n.find (8));
console.log (n.find (15));
console.log (n.find (22));
