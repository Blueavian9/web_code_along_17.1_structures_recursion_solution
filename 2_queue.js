class queue {
  constructor() {
    this.data = [];
  }
  enqueue(value) {
    this.data.push(value);
  }
  dequeue() {
    return this.data.shift();
  }
}

// Test cases: 
const myQueue = new queue(3); // 3
myQueue.enqueue(); // 3
myQueue.enqueue(); // 6
myQueue.enqueue(); // 9
console.log(myQueue.dequeue()); // 3
console.log(myQueue.dequeue()); // 6
console.log(myQueue.dequeue()); // 9