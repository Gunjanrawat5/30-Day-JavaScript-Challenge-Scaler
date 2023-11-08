// Write a program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them falls within range

function inRange(int1,int2){
    if(int1>=50 && int1<=99){
        return true;
    }
    else if(int2>=50 && int2<=99){
        return true;
    }
    return false;
}

console.log(inRange(80,56))