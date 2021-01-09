let q = [];
// adding to the end of an array is effecient (no need to re-index everything)
q.push("first");
q.push("second");
q.push("third");
// removing from the start of the array is in-efficient (need to re-index every time something is removed)
q.shift();
q.shift();

// in-efficient but the reverse
q2 = [];
q2.unshift("first");
q2.unshift("second");
q2.unshift("third");
q2.pop();
q2.pop();

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  enqueue(val) {
    let newNode = new Node(val);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
    return this;
  }

  dequeue() {
    if (!this.size) return null;
    let currentFirst = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = currentFirst.next;
    this.size--;
    return currentFirst.val;
  }

  print() {
    let arr = [];
    let current = this.first;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
}

let newQ = new Queue();
newQ.enqueue("first");
newQ.enqueue("second");
newQ.enqueue("third");
console.log("newQ", newQ);
console.log("printed list", newQ.print());
newQ.dequeue();
console.log("newQ dequeued", newQ);
console.log("printed list dequeued", newQ.print());
