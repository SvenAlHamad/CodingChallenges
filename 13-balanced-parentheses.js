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
    if (this.top == null) {
      return null;
    }
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

const isBalanced = input => {
  const stack = new Stack ();
  const openBrackets = ['{', '[', '('];
  const closeBracket = ['}', ']', ')'];
  for (let i = 0; i < input.length; i++) {
    if (openBrackets.includes (input[i])) {
      stack.push (openBrackets.indexOf (input[i]));
    } else {
      // closed bracket validation
      const cb = stack.pop ();
      if (closeBracket[cb] != input[i]) {
        return false;
      }
    }
  }

  // do a final check
  if (stack.pop () !== null) {
    return false;
  }

  return true;
};

console.log (isBalanced ('{}()[{}]'));
