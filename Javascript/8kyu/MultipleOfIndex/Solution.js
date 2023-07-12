function multipleOfIndex(array) {
    let result = []; // result array to push correct values to it
    for (let i = 0; i < array.length; i++) {
        if (i === 0 && array[0] === 0) {
            // if the first item of array is 0 push it to the result because the second if won't work, because 0/0 is not integer
            result.push(0);
        }
        if (Number.isInteger(array[i] / i)) {
            // if the number/its index is an integer, move it to the result array
            result.push(array[i]);
        }
    }
    return result; // return result array function output
}

console.log(multipleOfIndex([0, 22, -6, 32, 82, 9, 25]));
