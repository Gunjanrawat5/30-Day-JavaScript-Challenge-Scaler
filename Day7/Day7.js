// Check a pair of numbers and return true if one of them is 50 or if their sum is 50.

function checkPair(num1,num2){
    return(num1+num2 == 50) || (num1 ==50 || num2 ==50)
}

console.log(checkPair(50,10));
console.log(checkPair(40,10));
console.log(checkPair(50,50));
console.log(checkPair(60,10));
