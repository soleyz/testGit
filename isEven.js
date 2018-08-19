function isEven(number){
    if (number == 1){
        return false
    }
    else if (number ==0){
        return true
    }
    else if (number != 0){
        console.log("Recursion :" +number);
        return(isEven(number-2))
    }
}
console.log(isEven(25));
console.log(isEven(50));
console.log(isEven(75));