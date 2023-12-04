// **Challenge 29**  
// Description:  
// Write a function raceWithTimeout that takes an array of promises and a timeout value. The function should resolve when the first promise resolves or reject if none resolve within the given timeout.  
// Solution Approach:  
// Use Promise.race and a timeout promise.

const raceWithTimeout = (promises, timeout) => {
    const timeoutPromise = new Promise((_, reject) => {
      setTimeout(() => {
        reject(new Error('Timeout exceeded'));
      }, timeout);
    });
  
    return Promise.race([...promises, timeoutPromise]);
  };
  
  const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 resolved'), 2000));
  const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 4000));
  
  raceWithTimeout([promise1, promise2], 3000)
    .then(result => console.log(result)) 
    .catch(error => console.error(error));
  