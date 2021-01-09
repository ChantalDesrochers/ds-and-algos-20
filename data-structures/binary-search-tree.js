class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currentNode = this.root;
    while (true) {
      // ignoring if it's equal to an existing node
      // if you don't want to ignore, could have a count inside node for number of nodes with that value
      // only one of each value is added to the physical tree however
      if (value === currentNode.value) return undefined;
      if (value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  // find(value) {
  //   if (!this.root) return false;
  //   let currentNode = this.root;
  //   let found = false;
  //   while (currentNode && !found) {
  //     if (value < currentNode.value) {
  //       currentNode = currentNode.left;
  //     } else if (value > currentNode.value) {
  //       currentNode = currentNode.right;
  //     } else {
  //       found = true;
  //     }
  //     if (!found) return false;
  //     return currentNode;
  //   }
  // }
  find(value) {
    if (!this.root) return false;
    if (this.root.value === value) return true;
    let currentNode = this.root;
    while (true) {
      if (value < currentNode.value) {
        if (!currentNode.left) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          return false;
        }
        currentNode = currentNode.right;
      }
      if (value === currentNode.value) return true;
    }
  }

  breadthFirstSearch() {
    let queue = [];
    let values = [];
    let dequeued;
    queue.push(this.root);
    while (queue.length) {
      dequeued = queue.shift();
      values.push(dequeued);
      if (dequeued.left) queue.push(dequeued.left);
      if (dequeued.right) queue.push(dequeued.right);
    }
    return values;
  }

  // visit and add every node, left side first, and then right
  depthFirstSearchPreOrder() {
    let data = [];
    function traverse(node) {
      data.push(node.value);
      // data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // traverse but do not add until at the most bottom left
  // go bottom left up
  depthFirstSearchPostOrder() {
    let data = [];
    function traverse(node) {
      // data.push(node);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  // left side and then right?
  depthFirstSearchInOrder() {
    let data = [];
    function traverse(node) {
      // data.push(node);
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }
}

let bst = new BinarySearchTree();
// bst.root = new Node(10);
// bst.root.right = new Node(15);
// bst.root.left = new Node(7);
bst.insert(15);
bst.insert(14);
bst.insert(12);
bst.insert(13);
bst.insert(3);
bst.insert(5);
bst.insert(20);
bst.insert(22);
bst.insert(21);
bst.insert(50);
//        15
//     14    20
//   12          22
// 3    13    21     50
//    5

//
// console.log("bst added?", bst);
// console.log("find 3", bst.find(3));
// console.log("find 8", bst.find(8));
// console.log(bst.breadthFirstSearch());
console.log(bst.depthFirstSearchPreOrder());
console.log(bst.depthFirstSearchPostOrder());
console.log(bst.depthFirstSearchInOrder());

let ntree = new BinarySearchTree();
// console.log("ntree.find(2)", ntree.find(2));
