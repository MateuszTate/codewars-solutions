function rot13(message){
    const alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
      ]; // array with every letter
    let copiedMessage = message.toLowerCase(); // make copy of message but lower case
    let array = copiedMessage.split(''); // make array from lower case message
    let result = []; // empty array for function output
    for(let element of array){
        if(/^[a-zA-Z]$/.test(element)){ // do it only if element is letter
            let currentIndex = alphabet.indexOf(element); // find index of current letter in alphabet
            let newIndex = currentIndex+13; // find new letter to switch current letter
            if(newIndex>25){ // if index of new letter is higher than amount of indexes
                let howMuchTooMuch = newIndex - 26;
                newIndex = 0 + howMuchTooMuch; // start from beginning
            }
            element = alphabet[newIndex]; // change letter to letter with newIndex (shifted by 13 from beginning letter)
        }
        result.push(element); // push letter to the result array
    }
    for(let i = 0; i<result.length; i++){
        if(message[i]==message[i].toUpperCase()){
            result[i]=result[i].toUpperCase(); // make correct letters uppercase, (same indexes as in original message)
        }
    }
    return result.join(''); // return result (function output) array as string
  }

console.log(rot13(',ebc2BQv'));