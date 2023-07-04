function noOdds( values ){
    let result = []; // array variable for result of function
    for(element of values){ // for every element of values array if its even then push it into result array;
        if(element%2==0) result.push(element);
    }
    return result; // return function output
  }