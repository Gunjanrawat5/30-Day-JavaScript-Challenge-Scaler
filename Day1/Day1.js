// Problem Statement - Write a function that reverses a number

function ReverseNumber(number){
    let temp = 0;
    let revNum = 0;
    while(number>0){
    temp = number%10;
    revNum = revNum*10 + temp;
    number = Math.floor(number/10)
    }
    return revNum;
      
}
console.log(ReverseNumber(10234))