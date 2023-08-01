/*
Example Problem 1:

Problem Statement: "You are given a sorted array of integers. Write a function to return the sum of all even numbers in the array."

Key elements: 'sorted array of integers,' 'function,' 'sum,' 'even numbers'

Required output: Sum of all even numbers

Possible inputs: Sorted array of integers

*/

/*  

Problem Breakdown: 

1. Input: We are given a sorted array of integers. The input is a list of integers.

2. Output: We need to return the sum of all even numbers in the array. The output is a single integer representing the sum.

3. key Elements:
  **Sorted array: The given array is sorted in ascending order, which simplifies the solution.
  **Function: We need to write a function that takes the array as input and returns the sum of even numbers. 


    Approach to Solve: 
    To solve this problem, we can iterate through the sorted array, check if each number is even, and then add the even numbers to the sum. Since the array is sorted, we can use this property to optimize our solution.

    Pseudo Solution: 

    Function sumOfEvenNumbers(sortedArray):
        Initialize a variable 'sum' to 0 
        For each number 'num' in sortedArray: 
            If 'num' is even: 
                Add 'num' to 'sum' 
            Return 'sum' 
    */

function sumOfEvenNumbers(sortedArray) {
  // Initialize the sum to 0
  let sum = 0;

  // Iterate through the sortedArray
  for (let num of sortedArray) {
    // Check if the number is even (divisible by 2 with no remainder)
    if (num % 2 === 0) {
      // Add the even number to the sum
      sum += num;
    }
  }

  // Return the final num
  return sum;
}

// Test cases
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12 (2 + 4 + 6)
console.log(sumOfEvenNumbers([2, 4, 6, 8, 10])); // Output: 30 (2 + 4 + 6 + 8 + 10)
console.log(sumOfEvenNumbers([1, 3, 5, 7])); // Output: 0 (no even numbers in the array).
