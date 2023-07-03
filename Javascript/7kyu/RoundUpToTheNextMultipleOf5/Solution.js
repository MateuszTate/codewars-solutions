function roundToNext5(n) {
    let result; // not defined variable for result of function
    let breakLoop = false; // a variable specifying whether n%5=0 was found or not
    for(let i = n; breakLoop == false; i++){ // for loop going as long as the variable breakLoop is false
        if(i%5===0){ // if current number is multiply of 5
            result = i; // then make this number a function result
            breakLoop = true; // and break the loop
        }
    }
    return result; // return function output
}

console.log(roundToNext5(25));
