function highAndLow(numbers) {
  var numbers = numbers.split(" ").map(Number); // split numbers by space " " throw them into array. change str to number with map

  var highest = Math.max(...numbers); // highest value using Math.max
  var lowest = Math.min(...numbers); // loewst value using Min.max
  // (...) is essential for code to work properly, otherwise output will be NaN (Not a Number). (...) takes numbers from array and put them into function argument. Imagine having array [1,2,3], by using (...) code will automatically make it function arguments and its the same as manually writing function(1,2,3)

  return highest + " " + lowest; // return output of function
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
