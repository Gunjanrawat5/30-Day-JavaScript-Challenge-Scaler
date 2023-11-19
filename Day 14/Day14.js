// Function to concatenate a given string n times (default is 1)
// Eg : console.log(repeat("Ha!"))
// Eg : console.log(repeat("Ha!",2))
// Output : "Ha!"
// "Ha!Ha!"


function repeat(text,n=1){
    return text.repeat(n)
}

console.log(repeat("Ha!"));      
console.log(repeat("Ha!", 2));
console.log(repeat("Ha!", 3));
