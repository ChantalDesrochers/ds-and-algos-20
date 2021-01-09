// can use push and pop methods on an array to create a 'stack' (adding and removing from end)
let stack = [];
stack.push("google");
stack.push("reddit");
stack.push("youtube");
// console.log(stack);
stack.pop();
stack.pop();

// can use shift and unshift methods on an array to create a 'stack' (adding and removing from start)... less efficient than stack (because of the way array indexing works)
let stack2 = [];
stack2.unshift("lala");
stack2.unshift("haha");
stack2.shift();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(val) {
    let newNode = new Node(val);
    let currentHead = this.first;
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.first = newNode;
      this.first.next = currentHead;
    }
    return ++this.size;
  }

  pop() {
    if (this.length === 0) return null;
    let currentHead = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = currentHead.next;
    this.size -= 1;
    return currentHead;
  }
}

let madeStack = new Stack();
madeStack.push(3);
madeStack.push(4);
madeStack.push(1);
console.log(madeStack);
console.log(madeStack.pop());
console.log(madeStack);
// creating two methods push and pop, but must be constant time
// since we don't care about order, we will actually just use shift and unshift to add and remove things from the start
