let counter = 0;
function fib(n, memo) {
  counter++;
  let result;
  if (memo[n]) {
    return memo[n];
  }
  if (n === 0 || n === 1) {
    result = 1;
  } else {
    return fib(n - 1, memo) + fib(n - 2, memo);
  }
  memo[n] = result;
  return result;
}

fib(5, {});
console.log(counter);
counter = 0;

fib(6, {});
console.log(counter);
counter = 0;

fib(20, {});
console.log(counter);
counter = 0;

fib(50, {});
console.log(counter);
counter = 0;

// Revisiting Our Solution

//
//                     fib(4)
//                    /     \
//                   /       \
//              fib(3)      * fib(2) *
//              /   \           /   \
//             /     \         /     \
//         fib(2)  fib(1)  * fib(1)  fib(0) *
//        /    \
//       /      \
//  fib(1)    fib(0)     *we are skipping entire branches of this tree with this optimization technique with the help of Dynamic Programming.
//
//
