// Implement a Memoization function

function memoize(func) {
    const cache = {};
  
    return function (...args) {
      const key = JSON.stringify(args);
  
      if (cache[key]) {
        console.log('Fetching from cache');
        return cache[key];
      } else {
        console.log('Calculating result');
        const result = func(...args);
        cache[key] = result;
        return result;
      }
    };
  }
  
  
  function add(a, b) {
    console.log('Executing add function');
    return a + b;
  }
  
 
  const memoizedAdd = memoize(add);
  
  
  console.log(memoizedAdd(2, 3)); 
  console.log(memoizedAdd(2, 3)); 
  console.log(memoizedAdd(4, 5)); 
  console.log(memoizedAdd(4, 5)); 
  