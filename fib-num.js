/* Leet-code problem: 509 Fibonacci Number
The Fibonacci numbers, commonly denoted F(n)
from a sequence, called the Fibonacci sequence, 
such that each number is the sum of the two
preceding ones, starting from 0 and 1. That is, 

F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1. 

Given n, calculate F(n).

Example 1: 

Input: n = 2
Output: 1 
Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
  

Constraints: 
** 0 <= n <= 30 
*/

/**
 * @param {number} n
 * @return {number}
 */
let cache = [0, 1]; 
var fib = function(n) {
    if (n < cache.length) {
       return cache[n];
    } else {
         for (let i = cache.length; i <= n; i++) {
             cache.push(cache[i - 1] + cache[i - 2]);
         }
    }
    return cache[n];
};

// Example usage: 
let a = fib(100); // Calculate the 100th Fibonacci number and store it in 'a'.

/* 
PLAN: 
1. Initialize the cache array with the first two Fibonacci numbers.
2. Create the fib function with the given input n.
3a. Check if n is less than the length of the cache array.
3b If it is, return the cached result directly.
4a. Calculate Fibonacci numbers using a loop and store in cache.
4b. Return the Fibonacci number at index n. 
*/

// Base case is the condition where you don't call the function again.
// F(0) = 0, F(1) = 1

// Recursive is the condition where you call the function again. 
// F(n) F(n -1) + F(n -2), for n > 1.