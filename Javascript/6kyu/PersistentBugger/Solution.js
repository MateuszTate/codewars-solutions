function persistence(num) {
    let count = 0;
  
    while (num > 9) {
      num = multiplyDigits(num);
      count++;
    }
  
    return count;
  }
  
  function multiplyDigits(num) {
    return num.toString().split('').map(Number).reduce((a, b) => a * b);
    // function that: makes num a String, then split it by every character to the Array, map every element to Number, use reduce to multiply every element of array
  }
    

 console.log(persistence(999));