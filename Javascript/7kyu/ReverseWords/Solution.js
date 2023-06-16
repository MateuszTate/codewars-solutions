function reverseWords(str) {
    let result = []; // array variable for result
    
    str = str.split(' '); // make array from string
    
    for (element of str){ // go trough every element of array by using for of loop
        element = element.split("").reverse().join(""); // split - make array from element, reverse - reverse array (element), join - make string from array
        result.push(element); // push string to the array
    }
    result = result.join(' '); // make string from array result
    return result; // return function output
  }

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));