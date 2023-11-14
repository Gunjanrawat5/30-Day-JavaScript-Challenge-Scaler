// Function to find the first not repeated character

function notRepeatedCharacter(text){
for(let i =0 ; i<text.length;i++){
    let j = text.charAt(i)
    if(text.indexOf(j)==text.lastIndexOf(j)){
        return j;
    }
}
return null;
}


let text1 = "abcdeabcd"
let text2 = "abcdefabcde"
let text3 = "aabbcde"

console.log(notRepeatedCharacter(text1))
console.log(notRepeatedCharacter(text2))
console.log(notRepeatedCharacter(text3))

