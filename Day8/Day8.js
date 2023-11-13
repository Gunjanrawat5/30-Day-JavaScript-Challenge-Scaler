// Function to get all possible subsets with a fixed length . 
// Eg - [1,2,3] length = 2 ; o/p = [[2,1],[3,1],[3,2]]

// function subset(array, array_size) {
//     let result_set = [],
//         result;
  
//     for (let x = 0; x < Math.pow(2, array.length); x++) {
//       result = [];
//       let i = array.length - 1;
//       do {
//         if ((x & (1 << i)) !== 0) {
//           result.push(array[i]);
//         }
//       } while (i--);
  
//       if (result.length >= array_size) {
//         result_set.push(result);
//       }
//     }
  
//     return result_set;
//   }

  
  
//   console.log(subset([1, 2, 3], 2));
//   console.log(subset([1, 2], 2));
//   console.log(subset([1, 2, 3,4], 3));
  
  function getSubsets(arr, length) {
    const result = [];
  
    function generateSubsets(start, currentSubset) {
      if (currentSubset.length === length) {
        result.push([...currentSubset]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        currentSubset.push(arr[i]);
        generateSubsets(i + 1, currentSubset);
        currentSubset.pop();
      }
    }
  
    generateSubsets(0, []);
  
    return result;
  }
  
  console.log(getSubsets([1,2,3],2));   
  