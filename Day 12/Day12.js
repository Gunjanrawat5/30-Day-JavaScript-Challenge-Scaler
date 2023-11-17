// Write a JS program to create a clock. Output will come every second.


function Clock(){

let currentTime = new Date()

let hours = currentTime.getHours()
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();

minutes = (minutes<10?"0":"") + minutes
seconds = (seconds<10?"0":"") + seconds

const currentTimeString = hours + ":" + minutes + ":" + seconds
console.log(currentTimeString) 
}

setInterval(Clock,1000)
