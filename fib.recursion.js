// DSA practice 1:
// Linked list search

// DSA sample practice 2:
// closure

// DSA sample practice 3:
// find the 9th num
function solution(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
}

function solution(n) {
  return fib(n);
}
console.log(solution(3)); // Output: 2
console.log(solution(6)); // Output: 8

// DSA practice 4:
// Reverse Linked list
