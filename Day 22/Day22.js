// **Challenge 22**  
// Problem Statement: Write a function to deeply compare two objects for equality.  
// Description: Given two objects, the function should return true if they are deeply equal and false otherwise.  
// Solution Approach: Recursively compare properties of both objects.  


function deepEqual(obj1, obj2) {
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
        return obj1 === obj2;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if (keys1.length !== keys2.length || !keys1.every(key => keys2.includes(key))) {
        return false;
    }

    for (const key of keys1) {
        if (!deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}

const objA = { a: 1, b: { c: 2, d: 3 } };
const objB = { a: 1, b: { c: 2, d: 3 } };
const objC = { a: 1, b: { c: 2, d: 4 } };

console.log(deepEqual(objA, objB)); 
console.log(deepEqual(objA, objC)); 
