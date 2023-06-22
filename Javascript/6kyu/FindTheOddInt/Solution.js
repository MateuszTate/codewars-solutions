function findOdd(A) {
  A = A.sort(); // sort an array
  let firstNumber = A[0]; // first number is the first element of array
  let counter = 0; // make a counter for how many times element occurred in array
  for(let j = 1; j<=A.length; j++){
  while(A[counter]===firstNumber){ // as long as A is first number add one to counter, break while loop when A[counter] is no longer equal to first element of array
    counter++;
  }
  if(counter%2!=0) return firstNumber; // if counter is odd return first number
  else firstNumber=A[j]; // if counter is not odd make first number equal to the next element of array. in this example ive console logged first number is now 1 and it repeat again whole for loop
}
}

console.log(findOdd([0,1,0,1,2]));