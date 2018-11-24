class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * Last In First Out (LIFO)
 * - we always add and remove from the top
 */
class Stack {
  constructor () {
    this.top = null;
  }

  push (data) {
    if (this.top === null) {
      this.top = new Node (data);
      return;
    }

    const newTop = new Node (data);
    newTop.next = this.top;
    this.top = newTop;

    return;
  }

  pop () {
    const data = this.top.data;
    this.top = this.top.next;
    return data;
  }

  print () {
    let current = this.top;
    console.log (this.top.data);
    while (current.next !== null) {
      console.log (current.next.data);
      current = current.next;
    }
  }
}

/**
 * First In First Out (FIFO)
 * - we add to the tail, we remove from the head
 */
class Queue {
  constructor () {
    this.head = null;
    this.tail = null;
  }

  add (val) {
    const node = new Node (val);
    if (this.tail != null) {
      this.tail.next = node;
    }
    this.tail = node;

    if (this.head === null) {
      this.head = node;
    }
  }

  remove () {
    if (this.head === null) {
      return;
    }
    const data = this.head.data;
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return;
    }

    this.head = this.head.next;
    return data;
  }

  print () {
    let queue = '';
    let current = this.head;
    queue = current.data + ' -> ' + queue;
    while (current.next !== null) {
      queue = current.next.data + ' -> ' + queue;
      current = current.next;
    }
    console.log (queue);
  }
}

const s = new Stack ();
console.log ('stacks');
s.push (4);
s.push (3);
s.push (2);
s.push (1);
s.print ();
console.log ('pop');
s.pop ();
s.print ();
console.log ('queues');
const q = new Queue ();
q.add ('A');
q.add ('B');
q.add ('C');
q.add ('D');
q.print ();
console.log ('remove');
q.remove ();
q.print ();
