function digitize(n) {
    n = n.toString().split("").reverse(); // to use split to make array I have to change type of n to string first, then reverse this new array
    for (let i = 0; i < n.length; i++) {
        n[i] = Number(n[i]); // change every element to number
    }
    return n; // return function output
}

console.log(digitize(123));
