function sumCubes(n){
    let sum = 0; // variable to store sum of cubes
    for(let i = 1; i <= n; i++){
        sum += i*i*i; // add to the sum cube of current number
    }
    return sum; // return sum as a function output
  }

console.log(sumCubes(3));

