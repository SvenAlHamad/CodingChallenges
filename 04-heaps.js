class Heap {
  constructor (heap) {
    this.heap = heap;
    this.size = heap.length;
  }

  getLeftChildIndex (index) {
    return index * 2 + 1;
  }

  getRightChildIndex (index) {
    return index * 2 + 2;
  }

  getParentIndex (index) {
    let pindex = (index - 2) / 2;
    if (pindex < 0) {
      return 0;
    }
    return pindex;
  }

  hasLeftChild (index) {
    return this.getLeftChildIndex (index) < this.size;
  }

  hasRigthChild (index) {
    return this.getRightChildIndex (index) < this.size;
  }

  hasParent (index) {
    return this.getParentIndex (index) < this.size;
  }

  getLeftChild (index) {
    return this.heap[this.getLeftChildIndex (index)];
  }

  getRightChild (index) {
    return this.heap[this.getRightChildIndex (index)];
  }

  getParent (index) {
    console.log (this.getParentIndex (index));
    return this.heap[this.getParentIndex (index)];
  }

  swap (indexA, indexB) {
    if (typeof this.heap[indexA] == 'undefined') {
      throw 'Index: ' + indexA + ' is out of bounds';
    }

    if (typeof this.heap[indexB] == 'undefined') {
      throw 'Index: ' + indexB + ' is out of bounds';
    }
    const temp = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = temp;
  }

  resize () {
    this.size = this.heap.length;
  }

  add (el) {
    this.heap[this.size] = el;
    this.resize ();
    this.heapifyUp ();
  }

  getHeap () {
    return this.heap;
  }

  removeRoot () {
    // replace root with last added
    this.heap[0] = this.heap[this.size - 1];

    // remove the last element
    this.heap.pop ();
    this.resize ();

    this.heapifyDown ();
  }

  heapifyUp () {
    let index = this.size - 1;

    console.log (this.getParent (index));

    while (
      this.hasParent (index) &&
      this.getParent (index) > this.heap[index]
    ) {
      this.swap (this.getParentIndex (index), index);
      index = this.getParentIndex (index);
    }
  }

  heapifyDown () {
    let index = 0;

    while (index < this.size) {
      let leftSide = false;
      if (this.hasLeftChild (index)) {
        leftSide = this.getLeftChild (index);
      }

      let rightSide = false;
      if (this.hasRigthChild (index)) {
        rightSide = this.getRightChild (index);
      }

      if (
        (!rightSide || this.heap[index] < rightSide) &&
        (!leftSide || this.heap[index] < leftSide)
      ) {
        break;
      }

      let swapIndex = this.getLeftChildIndex (index);
      if (rightSide !== false && leftSide > rightSide) {
        swapIndex = this.getRightChildIndex (index);
      }

      this.swap (swapIndex, index);
      index = swapIndex;
    }
  }
}

const h = new Heap ([10, 15, 20, 17, 25]);
//h.add (8);
h.removeRoot ();
console.log (h.getHeap ());
