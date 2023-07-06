"use strict";

function flattenAndSort(array) {
    let result = []; // empty array for result of function
    for (let i = 0; i < array.length; i++) {
        result = result.concat(array[i]); // concat combiens arrays together
    }
    return result.sort((a, b) => a - b); // return result sorted by numbers
}

console.log(
    flattenAndSort([
        [3, 2, 1],
        [7, 9, 8],
        [6, 4, 5],
    ])
);
