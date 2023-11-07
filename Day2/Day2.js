// Write a function that accepts a string as a parameter and converts the first letter of each word into upper case

function toUpperCase(text){
    const textArray = text.split(" ")
    for(let i in textArray){
        textArray[i] = textArray[i][0].toUpperCase()+ textArray[i].substr(1)
    }
    const ans = textArray.join(" ")
    return ans;
}

console.log(toUpperCase("my name is Jeff"));