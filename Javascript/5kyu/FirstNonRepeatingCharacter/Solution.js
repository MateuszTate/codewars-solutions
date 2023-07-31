function firstNonRepeatingLetter(s) {
    let stringCopy = s.toLowerCase().split('');
    for(let i = 0; i<stringCopy.length; i++){
        const filtered = stringCopy.filter(item => item === s[i].toLowerCase());
        if(filtered.length < 2){
            for(let element of s.split('')){
                if(filtered.join('') == element.toLowerCase()){
                    return element;
                }
            }
        };
    }
    return "";
  }

console.log(firstNonRepeatingLetter(''));