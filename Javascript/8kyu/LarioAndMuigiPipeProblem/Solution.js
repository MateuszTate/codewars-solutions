function pipeFix(numbers){
    let result = []; // empty array for function output
    for(let i=numbers[0]; i<=numbers[numbers.length-1]; i++){ // for loop going from first index of numbers array to the last number. every index variable i is increased by one
        result.push(i); // push i to the result array
    }
    return result; // return result array as a function output
}

console.log(pipeFix([6,9]));