function adjacentElementsProduct(array) {
    let result = array[0]*array[1]; // result variable to store highest number
    for(let i = 0; i<=array.length; i++){
        if(array[i]*array[i+1] > result) result = array[i]*array[i+1]; // if current pair of numbers is bigger than result, make result equal to this pair
    }
    return result; // return result variable as function output
  }

console.log(adjacentElementsProduct([1, 5, 10, 9]));