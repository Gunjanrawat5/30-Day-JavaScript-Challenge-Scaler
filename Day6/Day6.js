// Compute the sum of two integers. If the two values are same, return triple their sum.

function getSum(int1,int2){
    let sum = int1 + int2;
    if(int1 === int2){
        sum = sum*3;
    }
    return sum;
}

console.log(getSum(5,10))
console.log(getSum(6,6))