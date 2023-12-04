// **Challenge 28**  
// Description:  
// Create a proxy object that intercepts and logs all property access.  
// Solution Approach:  
// Use the Proxy object to create a wrapper around another object.

const createLoggingProxy = (target) => {
    return new Proxy(target, {
      get: (target, property, receiver) => {
        console.log(`Property "${property}" accessed`);
  
    
        return Reflect.get(target, property, receiver);
      }
    });
  };
  

  const originalObject = { a: 1, b: 2 };
  const loggingProxy = createLoggingProxy(originalObject);
 
  console.log(loggingProxy.a); 
  console.log(loggingProxy.b); 
  