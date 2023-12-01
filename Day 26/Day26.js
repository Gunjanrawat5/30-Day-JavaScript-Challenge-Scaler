// **Challenge 26**
// Description:
// Write a function calculateTotal that takes an array of numbers, filters out the even numbers, squares the remaining numbers, and then calculates their sum.
// Solution Approach:
// Combine map, filter, and reduce array methods.

function calculateTotal(numbers) {
    const sumOfSquares = numbers
        .filter(number => number % 2 !== 0) 
        .map(number => number * number)      
        .reduce((sum, squaredNumber) => sum + squaredNumber, 0); 

    return sumOfSquares;
}


const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = calculateTotal(numbersArray);
console.log(result); 
