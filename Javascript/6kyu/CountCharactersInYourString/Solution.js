function count(string) {
    if (string === '') return {};
    // if string is empty it returns {}
  
    let result = {};
    // an empty object that will be filled by the rest of the code below
  
    function counter(letter, howMany) {
      result[letter] = howMany;
    }
    // a function that adds letters with the number of occurrences to the result object
  
    let array = [...string];
    // create an array from string, [...] works like: str="aBa" , [...str] = ['a','B','a']
  
    for (let element of array) { // go through every element of array by using for of loop
      if (result[element]) {
        result[element]++; // if the result already has an element (result[element]) increase the number of its occurrences by one (++)
      } else {
        result[element] = 1; // if the result has no element inside, set the number of occurrences of that element to 1
      }
    }
  
    return result; // return an object named result as the output of function count()
  }
  
  console.log(count('aBa'));