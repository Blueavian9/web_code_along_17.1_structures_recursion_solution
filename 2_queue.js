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

/*
// Sequence Condesignal codeAlong Practice Guide
function solution(sequence) {
  let stack = [];

  let match_map = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  // Go through all the characters
  for (let c of sequence) {
    console.log(c);
    // If it's an open character
    if (["(", "[", "{"].includes(c)) {
      // push it on the stack
      console.log("Pushing" + c);
    } else {
      // Find the matching character
      let match_char = match_map(c);

      // pop the stack
      let c2 = stack.pop();

      if (c2 != match_char) return false;

      // make sure the characters match
    }
  }
  
  if (stack.length != 0) return false;

  return true;
  

  // return stack.length == 0 ? true : false;

  return stack.length == 0;
}
*/
