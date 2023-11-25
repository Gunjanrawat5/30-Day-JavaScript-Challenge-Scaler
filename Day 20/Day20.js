// **Challenge 20**
// Problem Description:
// Write a JavaScript function named findFirstNegative that finds and returns the first negative number in an array using the find() method.
// Inputs:
// An array of numbers.
// Outputs:
// A number representing the first negative number in the array or undefined if there are no negative numbers.
// Hints:
// The find() method returns the value of the first element in the array that satisfies the provided testing function.
// Solution Approach:
// Use the find() method and provide a callback that checks if the number is negative.

function findFirstNegative(numbers) {
    const firstNegative = numbers.find(number => number < 0);
    return firstNegative
  }
  
  const numbersArray = [2, 5, -3, 8, -1, 4];
  console.log(findFirstNegative(numbersArray));
  