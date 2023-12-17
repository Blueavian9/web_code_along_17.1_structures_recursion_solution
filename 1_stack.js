/* notes:
 Add elements to the end of an array
const arr = [1, 2, 3];
arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]

 Remove the last element from an array
arr.pop();
console.log(arr); // [1, 2, 3, 4]

 Remove the first element from an array
arr.shift();
console.log(arr); // [2, 3, 4]

 Add elements to the beginning of an array
arr.unshift(0);
console.log(arr); // [0, 2, 3, 4] */

/*
Using a JavaScript array, implement a stack.
Hint: push/pop operations in a stack happen on 
the same side.
Picture a stack of pancakes
--adding and removing of flapjacks always happens
from the "top" of the stack. With an array,
we can use visualize either the "left" or "right" 
side of the array as the "top" of the stack,
so there are two ways to implement this.
Useful array methods:
push: add an element to the right side
unshift: add an element to the left side
pop: remove an element from the right side
shift: remove an element from the left side
*/

// Driver Task
class stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

// Test stack
let myStack = new Stack();
myStack.push(10);
myStack.push(20);
console.log(myStack.peek()); // Outputs 20
console.log(myStack.size()); // Outputs 2
myStack.pop();
console.log(myStack.size()); // Outputs 1
