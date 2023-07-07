function findEvenIndex(arr) {
    let result = -1; // default result equal to -1 as mentioned in kata
    for (let i = 0; i < arr.length; i++) {
        let smallerIndexSum = 0; // sum array from beginning up to the current index
        for (let j = 0; j < i; j++) {
            smallerIndexSum += arr[j];
        }
        let biggerIndexSum = 0; // sum array from current index up to the end
        for (let n = i + 1; n < arr.length; n++) {
            biggerIndexSum += arr[n];
        }
        if (smallerIndexSum === biggerIndexSum) {
            // if both sums are the same, set the current index (i) as the result
            result = i;
            break;
        }
    }
    return result; // return result as function output
}

console.log(findEvenIndex([0, 0, 0, 0, 0]));
