// Write a function named sumArray that takes an array of numbers and returns the sum of all the numbers in the array using the reduce() method
// Solution Approach:
// Initialize the reduce() method with an initial accumulator value of 0. Then, for each value in the array, add it to the accumulator.


function sumArray(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}


const numbersArray = [1, 2, 3, 4, 5];
console.log(sumArray(numbersArray));  
