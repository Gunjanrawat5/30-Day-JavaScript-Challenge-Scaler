// create a string_chop function that takes a string and a chop factor(size) and chops out the string into the factor(size) that has been passed
// eg - console.log(string_chop("Hello")) - o/p - ["Hello"]
// eg - console.log(string_chop("Name,2"))- o/p  ['Na','me']

function string_chop(str, size) {
    let choppedArray = [];
    if (typeof size !== 'number') {
        choppedArray.push(str)
    }
    else{
        for (let i = 0; i < str.length; i += size) {
            choppedArray.push(str.slice(i, i + size));
        }
    }
    
    return choppedArray;
}

console.log(string_chop("Hello"));       
console.log(string_chop("Name", 2));     
