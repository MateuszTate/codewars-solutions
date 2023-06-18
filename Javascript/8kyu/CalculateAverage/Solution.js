function findAverage(array) {
    if(array.length===0) return 0; // return 0 if array empty
    let sum = 0; // variable for total sum of elements of array
    for(let element of array){ // go through every element of array
        sum+=element; // add element to the sum
    }
    return sum/array.length; // return sum/how many items array has
  }

  console.log(findAverage([1,2,3,4]));