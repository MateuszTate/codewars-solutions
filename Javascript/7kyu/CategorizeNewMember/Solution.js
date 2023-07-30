function openOrSenior(data){
    let result = []; // result array for function output
    for(let element of data){
        if(element[0] > 54 && element[1] > 7){ // if age is higher than 54 and handicap is higher than 7
            result.push('Senior'); // push 'Senior' string to the result array
        }
        else result.push('Open'); // else push 'Open' string to the result array
    }
    return result; // return result as a function output
  }

console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]));