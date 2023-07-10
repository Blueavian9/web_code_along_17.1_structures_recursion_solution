// class queue {
//   constructor() {
//     this.data = [];
//   }
//   enqueue(value) {
//     this.data.push(value);
//   }
//   dequeue() {
//     return this.data.shift();
//   }
// }

// // Test cases:
// const myQueue = new queue();
// myQueue.enqueue(3);
// myQueue.enqueue(6);
// myQueue.enqueue(9);
// console.log(myQueue.dequeue()); // 3
// console.log(myQueue.dequeue()); // 6
// console.log(myQueue.dequeue()); // 9

class queue {
  constructor() {
    this.data = [];
  }
  enque(value) {
    this.data.push(value);
  }
  deque() {
    return this.data.shift();
  }
}

// Test cases:
const myQueue = new queue();
myQueue.enqueue(3); // 3
myQueue.enqueue(6); // 6
myQueue.enqueue(9); // 9
console.log(myQueue.dequeue()); // 3
console.log(myQueue.dequeue()); // 6
console.log(myQueue.dequeue()); // 9
