//Bubble sort descending

function bubbleSort(arr) {
    const len = arr.length;
    let swapped;

    for (let i = 0; i < len - 1; i++) {
        swapped = false;

        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) { 
                
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

    }

    return arr;
}

const array = [5, 2, 9, 1, 5, 6];
console.log(bubbleSort(array));
