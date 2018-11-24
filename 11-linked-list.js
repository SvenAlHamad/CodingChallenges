class Node {
  constructor (val) {
    this.val = val;
    this.next = null;
  }
}

class Linkelist {
  constructor () {
    this.head = null;
  }

  append (val) {
    if (this.head === null) {
      this.head = new Node (val);
      return;
    }

    // walk the list until end
    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    // once at the end, insert a new node
    current.next = new Node (val);
  }

  prepend (val) {
    const oldHead = this.head;
    this.head = new Node (val);
    this.head.next = oldHead;
  }

  deleteWithValue (val) {
    if (this.head === null) {
      return;
    }

    if (this.head.val == val) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.val === val) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  walkList () {
    let current = this.head;
    while (current !== null) {
      process.stdout.write (current.val.toString () + '->');
      current = current.next;
    }
  }

  checkIfCycle () {
    if (this.head === null || this.head.next === null) {
      return false;
    }
    let fast = this.head.next;
    let slow = this.head;

    while (fast.next !== null && fast != null && slow != null) {
      if (fast === slow) {
        return true;
      }

      fast = fast.next.next;
      slow = fast.next;
    }

    return false;
  }
}

const ll = new Linkelist ();
ll.append (2);
ll.append (7);
ll.append (3);
ll.append (9);
ll.append (5);
ll.walkList ();
console.log ('');
ll.prepend (11);
ll.walkList ();
console.log ('');
ll.deleteWithValue (9);
ll.walkList ();
