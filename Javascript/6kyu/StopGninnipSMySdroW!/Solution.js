function spinWords(string){
    let result = []; // array variable for result
    string = string.split(' '); // make array from string
    for(element of string) // go through every element of array by using for of loop
    {
        if(element.length>=5){
            element = element.split("").reverse().join(""); // split - make array from element, reverse - reverse array (element), join - make string from array
        }
        result.push(element); // push string to the array
    }
    result = result.join(' '); // make string from array result
    return result; // return function output
  }

console.log(spinWords("Hey fellow warriors"));