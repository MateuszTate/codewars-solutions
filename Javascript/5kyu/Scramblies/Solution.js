function scramble(str1, str2) {
    // objects to store character counts
    const str1Counts = {};
    const str2Counts = {};

    // count characters in str1
    for (let char of str1) {
        str1Counts[char] = (str1Counts[char] || 0) + 1;
    }

    // count chars in str2
    for (let char of str2) {
        str2Counts[char] = (str2Counts[char] || 0) + 1;
    }

    // check if str1 has enough characters to form str2
    for (let char in str2Counts) {
        if (!str1Counts[char] || str1Counts[char] < str2Counts[char]) {
            return false;
        }
    }

    return true;
}

console.log(scramble('rkqodlw', 'world'));
