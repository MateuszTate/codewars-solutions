function getEvenNumbers(numbersArray){
    const result = numbersArray.filter(number => number%2==0);
    return result; 
  }

console.log(getEvenNumbers([1,2,3,6,8,10]));