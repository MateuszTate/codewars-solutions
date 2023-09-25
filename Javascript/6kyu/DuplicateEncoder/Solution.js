function duplicateEncode(word) {
  word = word.toLowerCase();
  let result = '';

  for (let index = 0; index < word.length; index++) {
    let char = word[index];
    let rest = word.slice(0, index) + word.slice(index + 1);

    if (rest.includes(char)) {
      result += ')';
    } else {
      result += '(';
    }
  }

  return result;
}

console.log(duplicateEncode('recede'));
