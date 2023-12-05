// **Challenge 30**
// Description:
// Implement a throttle function that ensures a given function is not called more than once in a specified time interval.
// Solution Approach:
// Use a timestamp to track the last invocation time and prevent calling the function if it's within the throttle interval.

const throttle = (func, interval) => {
    let lastInvocationTime = 0;
  
    return function (...args) {
      const currentTime = Date.now();
      if (currentTime - lastInvocationTime >= interval) {
        func.apply(this, args);
        lastInvocationTime = currentTime;
      }
    };
  };
  
  const throttledFunction = throttle(() => {
    console.log('Function called');
  }, 1000);
  
  throttledFunction(); 
  throttledFunction();
  throttledFunction(); 
  
  setTimeout(() => {
    throttledFunction(); 
  }, 1000);
  