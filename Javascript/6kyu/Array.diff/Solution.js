function arrayDiff(a, b) {
    for (let i = 0; i < a.length; i++) { // nested for loop, one is checking current a index, second one is checking every index of b for every element of a
        for (let j = 0; j < b.length; j++) {
            if (b[j] === a[i]) { // if there is duplicate delete (splice) one index from current i, and then lower i by one to avoid skipping some indexes
                a.splice(i, 1);
                i--;
            }
        }
    }
    return a; // return a array as function output
}

console.log(arrayDiff([4, 1, 1, 3, 1, 1, 2, 1], [1, 2]));
