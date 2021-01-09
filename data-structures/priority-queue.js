class Node {
  constructor(priority, value) {
    this.priority = priority;
    this.value = value;
  }
}

// this doesn't guarantee that the first enqueued gets dequeued if two are of the same priority
// can add logic for this, but not here
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(priority, value) {
    let newNode = new Node(priority, value);
    this.values.push(newNode);
    let idx = this.values.length - 1;
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parentPriority = this.values[parentIdx].priority;
      if (newNode.priority >= parentPriority) break;
      [this.values[parentIdx], this.values[idx]] = [
        this.values[idx],
        this.values[parentIdx],
      ];
      idx = parentIdx;
    }
    return this.values;
  }
  // enqueue(priority, value) {
  //   let newNode = new Node(priority, value);
  //   this.values.push(newNode);
  //   let idx = this.values.length - 1;
  //   let parentIdx = Math.floor((idx - 1) / 2);
  //   while (newNode.priority < this.values[parentIdx].priority) {
  //     [this.values[parentIdx], this.values[idx]] = [
  //       this.values[idx],
  //       this.values[parentIdx],
  //     ];
  //     idx = parentIdx;
  //     parentIdx = Math.floor((idx - 1) / 2);
  //   }
  //   return this.values;
  // }

  dequeue() {
    const min = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      let idx = 0;
      const length = this.values.length;
      const element = this.values[0];

      // trickle down
      while (true) {
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild, rightChild;
        let swap = null;

        if (leftChildIdx < length) {
          leftChild = this.values[leftChildIdx];
          if (leftChild.priority > element.priority) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild.priority < element.priority) ||
            (swap !== null && rightChild.priority < leftChild.priority)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        [this.values[swap], this.values[idx]] = [element, this.values[swap]];
        idx = swap;
      }
    }
    return min;
  }
}

let priorityQueue = new PriorityQueue();
priorityQueue.enqueue(1, "la");
priorityQueue.enqueue(2, "da");
priorityQueue.enqueue(0, "no");
priorityQueue.enqueue(6, "ho");
priorityQueue.enqueue(1, "fo");
priorityQueue.enqueue(13, "go");
priorityQueue.enqueue(8, "sho");
priorityQueue.enqueue(4, "lo");
console.log("priorityQueue", priorityQueue.values);
priorityQueue.dequeue();
console.log("priorityQueue", priorityQueue.values);
priorityQueue.dequeue();
console.log("priorityQueue", priorityQueue.values);
priorityQueue.dequeue();
