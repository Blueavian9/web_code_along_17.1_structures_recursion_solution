// class stack {
//   constructor(value) {
//     this.data = [];
//   }
//   push(value) {
//     this.data.push(value);
//   }
//   pop() {
//     this.data.pop();
//   }
// }

// // Test cases:
// const myStack = new stack();
// myStack.push();
// myStack.push();
// myStack.push();
// console.log(myStack.pop(9)); // 9
// console.log(myStack.pop(6)); // 6
// console.log(myStack.pop(3)); // 3

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
const myQueue = new queue();
myQueue.enqueue(3);
myQueue.enqueue(6);
myQueue.enqueue(9);
console.log(myQueue.dequeue()); // 3
console.log(myQueue.dequeue()); // 6
console.log(myQueue.dequeue()); // 9
