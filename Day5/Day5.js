// Write a JS function to get the filename extension

function getExtension(filename){
    const extension = filename.split('.').pop()
    return extension;
}

console.log(getExtension("game.exe"))
console.log(getExtension("game.exe.html"))
console.log(getExtension("game.exe.html.js"))
