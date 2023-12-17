// class stack {
//   constructor() {
//     this.data = [];
//   }
//   push(value) {
//     this.data.push(value);
//   }
//   pop() {
//     return this.data.pop();
//   }
// }

// // Test cases:
// const myStack = new stack();
// myStack.push(3); // 3
// myStack.push(6); // 6
// myStack.push(9); // 9
// console.log(myStack.pop(9)); // 9
// console.log(myStack.pop(6)); // 6
// console.log(myStack.pop(3)); // 3
// implementing a basic queue w/ enqueue
// and dequeue operations.
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    return this.items.shift();
  }

  front() {
    return this.items[0];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Test queue
let myQueue = new Queue();
myQueue.enqueue(30);
myQueue.enqueue(40);
console.log(myQueue.front()); // Outputs 30
console.log(myQueue.size()); // Output 2
myQueue.dequeue();
console.log(myQueue.size()); // Output 1
