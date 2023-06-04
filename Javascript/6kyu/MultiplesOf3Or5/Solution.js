function solution(number){
  let sum = 0; // create a variable that will sum every number which is multiple of 3 or 5
  for(let i=0; i<number; i++){ // create a for loop that will go through every number untill its reach a number given in function
    if (i%3==0 || i%5==0) sum+=i; // if current for loop number is multiple of 3 or 5 add it to sum
  }
  return sum; // return sum as output of function
}

console.log(solution(10))