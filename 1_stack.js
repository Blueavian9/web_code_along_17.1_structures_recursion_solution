class stack {
  constructor(value) {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    this.data.pop();
  }
}

// Test cases:
const myStack = new stack();
myStack.push(3);
myStack.push(6);
myStack.push(9);
console.log(myStack.pop()); // 9
console.log(myStack.pop()); // 6
console.log(myStack.pop()); // 3
