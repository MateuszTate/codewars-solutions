function addLength(str) {
    let array = str.split(" "); // make array splitted by space " "
    let result = []; // empty array for function result 
    for(element of array){
        let length = element.length; // get length of every element of array and set it to new variable
        element = element+" "+length; // make one string from element, space and length variable
        result.push(element); // push new string to the empty result array
    }
    return result; // return result array as a function output
    }

console.log(addLength("apple ban"));
    