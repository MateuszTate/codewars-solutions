function permutations(string) {
    if(string<2) return [string]; // return input value as array if its smaller than 2
    const firstCharacter = string[0]; // take first letter from input
    let remainingCharacters = string.slice(1) // take rest of input
    let permutationsOfRemainingCharacters = permutations(remainingCharacters); // recursion: do permutations "on yourself"
    let result = []; // empty array for function output
    for (const perm of permutationsOfRemainingCharacters) {
        for (let i = 0; i <= perm.length; i++) {
          result.push(perm.slice(0, i) + firstCharacter + perm.slice(i)); // push to the result array first letter of current using permutation + first character of string + rest of the perm variable
        }
      }
    return [...new Set(result)]; // delete duplicates from array and return function output
}

console.log(permutations('aabb'));