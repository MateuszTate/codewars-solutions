const sequenceSum = (begin, end, step) => {
    let result = 0; // variable result for the final sum
    for(let i = begin; i <= end; i += step){ // start for loop at begin, its going untill step dont exceed end
        result+=i; // add current step to the result
    }
    return result; // return result as output of function
  };

console.log(sequenceSum(2,6,2));