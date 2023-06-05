function wave(str) {
    let arr = []; // empty array for result of function
    let limit = str.length - 1; // limit defining how many times str should be in array
  
    for (let i = 0; i <= limit; i++) { // for loop starting at str[0], stop when i is equal to limit, add 1 to i with every loop
      if (str[i] === ' ') {
        continue; // do nothing if letter of str is empty space. this loop adds str to array exactly as many times as there are letters in str.it's about letters, not characters.
      } else {
        let waveWord = str; // creating new variable waveWord to avoid overwriting original str
        waveWord = waveWord.slice(0, i) + waveWord[i].toUpperCase() + waveWord.slice(i + 1); // waveWord.slice(0, i) returns str before index i, waveWord[i].toUpperCase() makes letter with index i uppercase, and waveWord.slice(i + 1) returns str after index i.
        arr.push(waveWord); // add changed str to array
      }
    }
  
    return arr; // return array as function output
  }
  
  console.log(wave(' hello'));
  