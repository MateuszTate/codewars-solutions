function getNumberFromString(s) {
    let result = "" // empty string variable for function output
    for(let element of s.split('')){ // make array from input string
        if(Number(element) || element=='0'){ // if element of array is number
            result+=element; // add it to the result string
        }
    }
    return Number(result); // return result string as number
  }

console.log(getNumberFromString('thi0s is number: 7'));