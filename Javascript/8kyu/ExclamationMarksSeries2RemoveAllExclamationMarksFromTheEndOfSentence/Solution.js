function remove (string) {  
    string = string.split('').reverse(); // make reversed array from input string
    for(let i = 0; i<string.length; i++){
        if(string[i]=='!'){
            string.splice(i,1); // delete !
            i--;
        }
        else break; // if current index of string is not ! that means the next ! is not at the end of string, but inside so dont delete it, break the for loop instead
    }
    return string.reverse().join(''); // return string array as revrsed string
  }

console.log(remove('he!llo!!!'));