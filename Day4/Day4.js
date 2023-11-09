// Find the area of the triangle whose sides are 5,6,7.


//var declarations
const a = 5;
const b = 6;
const c = 7;
let s = (a+b+c)/2;

//Heron's formula
const area = Math.sqrt([s*(s-a)*(s-b)*(s-c)])

//Op
console.log("Area of triangle with sides 5,6,7 is " + area);