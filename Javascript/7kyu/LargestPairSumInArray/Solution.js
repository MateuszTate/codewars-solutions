function largestPairSum(numbers) {
    numbers = numbers.sort((a, b) => a - b).reverse(); // sort array by numbers and reverse it
    return numbers[0] + numbers[1]; // add first and second number from array and return sum as function output
}

console.log(largestPairSum([0, 1, 22, 3, 11, 5, 2]));
