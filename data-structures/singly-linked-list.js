// piece of data (val)
// reference to next node (next)
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length -= 1;
    if (!this.length) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (this.length === 0) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length -= 1;
    if (!this.length) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);
    let currentHead = this.head;
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = currentHead;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.tail;
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  set(index, value) {
    let replacingNode = this.get(index);
    if (replacingNode) {
      replacingNode.val = value;
      return true;
    }
    return false;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    // coerce to boolean (true)
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);
    let newNode = new Node(value);
    let priorNode = this.get(index - 1);
    let priorNodeNext = priorNode.next;
    newNode.next = priorNodeNext;
    priorNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    let priorNode = this.get(index - 1);
    let removeNode = priorNode.next;
    let newNext = removeNode.next;
    priorNode.next = newNext;
    this.length--;
    return removeNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let prev = null;
    let next;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
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
// [e,b,c,d,a]
// [e,_,_,_,a]
// [e,d,c,b,a]
// [a,b,c,d,e]
// current = e;
// next = b
// current's next = b

let list = new SinglyLinkedList();
list.push("a");
list.push("b");
list.push("c");
list.push("d");
list.push("e");

console.log(list.print());

list.reverse();
console.log("reversed list", list.print());

// list.push(2);
// // [2]
// // [3, 2]
// list.unshift(3);
// console.log('list after unshift 3', list)
// list.push(4);
// list.push(6);
// list.push(7);
// list.unshift(22);
// console.log('list after unshfit 22', list)
// list.push(8);
// console.log(list.get(0), 'list.get(0)');
// console.log(list.get(2), 'list.get(2)');
// console.log(list.get(4), 'list.get(4)');
// console.log(list.get(3), 'list.get(3)');
// console.log("getting index 2 val pre-remove", list.get(2));
// console.log("list before remove", list);
// console.log(list.remove(2));
// console.log("getting index 2 val", list.get(2));
// console.log("list after remove", list);
// console.log('list pre-pop', list);
// // console.log('list.head.next', list.head.next)
// list.pop();
// console.log('list popped', list)
// let wordList = new SinglyLinkedList();
// wordList.push('a');
// wordList.push('b');
// console.log('wordList', wordList);
// wordList.shift();
// wordList.shift();
// console.log('wordList', wordList);
// // wordList.pop();
// wordList.pop();
// console.log('wordList', wordList);

// [2,4,6,7,8]
// pre = 4
// pre = 7
// pre = 8... .next = null
