class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      let currentTail = this.tail;
      newNode.prev = currentTail;
      currentTail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let popped = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = popped.prev;
      this.tail.next = null;
      // severe this connection just in case someone saves the pop in a variable...
      // could still access the list... shouldn't be able to
      popped.prev = null;
    }
    this.length--;
    return popped;
  }

  shift() {
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentHead = this.head;
      this.head = newNode;
      this.head.next = currentHead;
      currentHead.prev = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    const midPoint = Math.floor(this.length / 2);
    if (index > midPoint) {
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      return current;
    } else {
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  // his solution:
  // get(index) {
  //   if (index < 0 || index >= this.length) return null;
  //   const midPoint = Math.floor(this.length / 2);
  //   if (index <= midPoint) {
  //     let current = this.head;
  //     let count = 0;
  //     while (count !== index) {
  //       current = current.next;
  //       count++;
  //     }
  //     return current;
  //   } else {
  //     let current = this.tail;
  //     let count = this.length - 1;
  //     while (count !== index) {
  //       current = current.prev;
  //       count--;
  //     }
  //     return current;
  //   }
  // }

  set(index, value) {
    let nodeAtIndex = this.get(index);
    if (nodeAtIndex) {
      nodeAtIndex.val = value;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);
    let newNode = new Node(val);
    let beforeNode = this.get(index - 1);
    let afterNode = beforeNode.next;
    beforeNode.next = newNode;
    newNode.next = afterNode;
    newNode.prev = beforeNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let removeNode = this.get(index);
    let afterNode = removeNode.next;
    let beforeNode = removeNode.prev;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }

  print() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current);
      current = current.next;
    }
    return arr;
  }
}

let initialList = new DoublyLinkedList();
initialList.push(2);
initialList.push(3);
initialList.push(7);
initialList.push(7);
initialList.push(9);
initialList.push(10);
// console.log("initialList.get(2)", initialList.get(2));
// console.log("initialList.get(5)", initialList.get(5));
// console.log("initialList.get(3)", initialList.get(3));
// console.log("initialList.get(4)", initialList.get(4));

console.log("printed before", initialList.print());
initialList.remove(0);
console.log(initialList.print(), "printed after");
// console.log("initialList", initialList);
// console.log("printeed", initialList.print());
// initialList.unshift("z");
// initialList.unshift("p");
// // console.log(initialList.shift(), "shifted");
// console.log("initialList", initialList);
// console.log("printeed post unshift", initialList.print());
// initialList.push(2);
// initialList.push(3);
// initialList.push(7);
// initialList.push(7);
// initialList.push(9);
// initialList.push(10);
// console.log("initialList", initialList);
// console.log("printeed", initialList.print());
// initialList.shift();
// initialList.shift();
// // console.log(initialList.shift(), "shifted");
// console.log("initialList", initialList);
// console.log("printeed post shift", initialList.print());
// initialList.push(2);
// initialList.push(3);
// initialList.push(7);
// initialList.push(7);
// initialList.push(9);
// initialList.push(10);
// console.log("initialList", initialList);
// console.log("printeed", initialList.print());
// initialList.pop();
// console.log(initialList.pop(), "popped");
// console.log("initialList", initialList);
// console.log("printeed", initialList.print());

// let smallList = new DoublyLinkedList();
// smallList.push(2);
// console.log("smallList", smallList);
// smallList.pop();
// console.log("smallList post pop", smallList);
