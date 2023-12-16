class stack {
  constructor() {
    this.data = [];
  }
  push(value) {
    this.data.push(value);
  }
  pop() {
    return this.data.pop();
  }
}

// Test cases:
const myStack = new stack();
myStack.push(3); // 3
myStack.push(6); // 6
myStack.push(9); // 9
console.log(myStack.pop(9)); // 9
console.log(myStack.pop(6)); // 6
console.log(myStack.pop(3)); // 3
