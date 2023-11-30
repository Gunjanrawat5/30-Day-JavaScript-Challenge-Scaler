// **Challenge 25**  
// Description:  
// Write a function getData that returns a Promise. Use this function to fetch data from two different APIs sequentially, and return the combined result.  
// Use any random API that you want  
// Solution Approach:  
// Utilize the .then method to chain promises.


function getData() {
    const jsonPlaceholderUrl1 = 'https://jsonplaceholder.typicode.com/posts/1';
    const jsonPlaceholderUrl2 = 'https://jsonplaceholder.typicode.com/todos/1';

    let data1; 
    return fetch(jsonPlaceholderUrl1)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data from JSONPlaceholder (Endpoint 1). Status: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData1 => {
            data1 = responseData1; 
            
            return fetch(jsonPlaceholderUrl2);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch data from JSONPlaceholder (Endpoint 2). Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data2 => {
        
            return { data1, data2 };
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
}


getData().then(combinedData => {
    console.log('Combined Data:', combinedData);
});
