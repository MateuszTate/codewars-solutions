function duplicateCount(text){
    text = text.toLowerCase().split('').sort().join(''); // make sorted and low case string from function input
    let counter = 0; // counter variable to count how many letters have duplicates
    let alreadyChecked = []; // array to store already included lettesr
    for(let i = 0; i<text.length; i++){
        if(text[i]==text[i+1]){ // if current letter and next letter are the same
            if(!alreadyChecked.includes(text[i])){ // if current letter is not counted yet
                counter++; // increase counter by one
            }
            alreadyChecked.push(text[i]); // mark current letter as already counted
        }
    }
    return counter; // return function output
  }

console.log(duplicateCount('Indivisibilityaaa'));