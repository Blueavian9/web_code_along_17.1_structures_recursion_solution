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
myStack.push();
myStack.push();
myStack.push();
console.log(myStack.pop(9)); // 9
console.log(myStack.pop(6)); // 6
console.log(myStack.pop(3)); // 3
