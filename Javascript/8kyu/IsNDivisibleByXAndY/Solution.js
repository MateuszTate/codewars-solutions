function isDivisible(n, x, y) {
    return n%x===0 && n%y===0; // return true if n / x is 0 and n / y = 0 otherwise return false
}

console.log(isDivisble(3,3,4));