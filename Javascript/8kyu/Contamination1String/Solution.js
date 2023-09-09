function contamination(text, char){
    let newString = '';
    for(let i = 0; i < text.length; i++){
        newString += char;
    }
    return newString;
  }

console.log(contamination('abc', 'z'));