function moveZeros(arr) { // create function with array (named arr) as argument
    for(element of arr){ // go through every element of array using for of loop
        if (element === 0){ // check if current element is 0. it's important to use "===" and not "==", otherwise null is treated as 0
            arr.push(arr.splice(arr.indexOf(element), 1)[0]); // indefOf(element) is getting an index of element equal to 0. splice removes 0 and returns a new array without element = 0. push moves removed by splice element (0) to and end of array
        }
    }
    return arr; // return array as function output
  }


console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]))