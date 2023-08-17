function reverseWords(str){
    str = str.split(' '); // make array from input string
    let string = []; // new array for new string
    for(let i = str.length-1; i >= 0; i--){
        string.push(str[i]); // add to the new array every string from default array, but start from the last index and end at index 0
    }
    return string.join(' '); // return new array as string
  }

console.log(reverseWords("The greatest victory is that which requires no battle")); 