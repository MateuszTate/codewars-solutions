function narcissistic(value) {
    const valueArr = value.toString().split(''); // make array from value
    let sum = 0; // variable to sum every element of array (^3) together
    for(let i = 0; i<valueArr.length; i++){
        sum+=Math.pow(valueArr[i], valueArr.length); // add every element^3 to the sum
    }
    return sum == value; // return true if sum and value are equal or return false if they are not
  }

console.log(narcissistic(153)); 
  