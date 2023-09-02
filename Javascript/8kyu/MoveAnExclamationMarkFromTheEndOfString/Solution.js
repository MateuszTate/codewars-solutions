function remove(string) {
    string = string.split('').reverse(); // make reversed array from string
    if(string[0]=='!'){
        string.splice(0, 1) // delete first index of array if its exclamation mark
    }
    return string.reverse().join(''); // return array as reversed string
  }

console.log(remove("H!i!!!"));