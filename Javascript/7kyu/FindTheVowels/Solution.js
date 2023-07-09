function vowelIndices(word){
    let result = []; // empty array for result
    word = word.toLowerCase(); // make word lower case so it is not case sensitive
    word = [...word]; // make word an array
    for(let i = 0; i<word.length; i++){
        if(word[i]==='a' || word[i]==='e' || word[i]==='i' || word[i]==='o' || word[i]==='u' || word[i]==='y'){
            result.push(i+1); // add current index+1 to result if it's vowel
        }
    }
    return result; // return result array
  }

console.log(vowelIndices("apple"));