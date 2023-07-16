function sumMul(n, m) {
    if (n <= 0 || m <= 0) return "INVALID"; // return invalid if inputs are wrong
    let result = 0; // variable for function output at beginning equal to 0
    for (let i = n; i < m; i += n){
        result+=i; // add i to the result as long as i is smaller than m
    }
    return result; // return function output
}

console.log(sumMul(2,9));