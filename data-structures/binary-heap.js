class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert(newValue) {
  //   this.values.push(newValue);
  //   let valueIndex = this.values.length - 1;
  //   while (valueIndex > 0) {
  //     let parentIndex = Math.floor((valueIndex - 1) / 2);
  //     let parent = this.values[parentIndex];
  //     if (newValue <= parent) break;
  //     [this.values[parentIndex], this.values[valueIndex]] = [
  //       this.values[valueIndex],
  //       this.values[parentIndex],
  //     ];
  //     valueIndex = parentIndex;
  //   }
  //   return this.values;
  // }
  insert(newValue) {
    this.values.push(newValue);
    let valueIndex = this.values.length - 1;
    let parentIndex = Math.floor((valueIndex - 1) / 2);
    while (newValue > this.values[parentIndex]) {
      [this.values[parentIndex], this.values[valueIndex]] = [
        this.values[valueIndex],
        this.values[parentIndex],
      ];
      valueIndex = parentIndex;
      parentIndex = Math.floor((valueIndex - 1) / 2);
    }
    return this.values;
  }

  extractMax() {
    const max = this.values[0];
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
          if (leftChild > element) {
            swap = leftChildIdx;
          }
        }
        if (rightChildIdx < length) {
          rightChild = this.values[rightChildIdx];
          if (
            (swap === null && rightChild > element) ||
            (swap !== null && rightChild > leftChild)
          ) {
            swap = rightChildIdx;
          }
        }
        if (swap === null) break;
        [this.values[swap], this.values[idx]] = [element, this.values[swap]];
        idx = swap;
      }
    }
    return max;
  }
}

let heap = new MaxBinaryHeap();
heap.insert(40);
heap.insert(36);
heap.insert(4);
heap.insert(56);
heap.insert(33);
heap.insert(74);
heap.insert(99);
console.log(heap.values, "heap");
heap.extractMax();
console.log(heap.values, "heap after");
heap.extractMax();
console.log(heap.values, "heap after");
