// **Challenge 24**  
// Description:  
// Implement a debounce function that takes a function and a delay as arguments. The returned function should ensure that the original function is not called more than once in the specified delay.  
// Solution Approach:  
// Use a timer and clear it on each invocation to delay the function execution.

function debounce(func, delay) {
    let timeoutId;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timeoutId);

        timeoutId = setTimeout(function() {
            func.apply(context, args);
        }, delay);
    };
}

function exampleFunction() {
    console.log("Function executed!");
}

const debouncedFunction = debounce(exampleFunction, 1000);

debouncedFunction(); 
debouncedFunction(); 
debouncedFunction(); 

