function sumOfDifferences(arr) {
    let result = 0; // variable for function output, equal to 0 at the beginning
    if(arr.length<2) return result; // if there are not enough elements to make a substraction just return 0
    arr = arr.sort((a,b)=>b-a); // sort array in descending order
    for (let index = 0; index < arr.length-1; index++) {
        result += arr[index]-arr[index+1]; // add to the result current index of array minus the next one, make it for every number by using for loop
    }
    return result; // return result as a function output
}

console.log(sumOfDifferences([1, 2, 10]));