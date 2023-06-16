function pigIt(str){
    let result = []; // empty array for result;
    str = str.split(' '); // make array from string argument
    for(element of str){ // go through every element of array
        if(element.match(/[a-z]/i)){ // if element contains letters, to avoid reversing and adding "ay" to the special characters like "!", "?" etc.
            let modifiedElement = element.slice(1) + element.charAt(0); // first letter of element to the end
            result.push(modifiedElement+'ay'); // add ay to the element and push it to the result array
        }
        else{
            result.push(element); // if element dont contain element just push it to the array
        }
        
    }
    result = result.join(' '); // array to string
    return result; // return string as function output
  }

console.log(pigIt('Pig latin is cool !'));