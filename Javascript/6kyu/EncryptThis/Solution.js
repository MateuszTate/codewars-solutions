var encryptThis = function(text) {
    text = text.split(' '); // make array of strings separated by space from input string
    for(let i = 0; i<text.length; i++){
        text[i] = text[i].split(''); // make array of strings of current word
        let temp = text[i][1]; // make temp variable to store current word second letter
        text[i][1] = text[i][text[i].length - 1]; // second letter is the same as the last letter
        text[i][text[i].length - 1] = temp; // and the last letter is now the same as temp so second letter before changes
        text[i][0] = text[i][0].charCodeAt(); // make first letter ASCII
        text[i] = text[i].join(''); // make array of letters string again
    }

    return text.join(' '); // return array of words as one string
  }

console.log(encryptThis('hello world'));