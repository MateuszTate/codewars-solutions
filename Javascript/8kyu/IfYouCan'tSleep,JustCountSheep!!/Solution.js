var countSheep = function (num){
    let result = []; // result variable as array
    for(let i=1; i<=num; i++){ // push number (i) to the result variable, push space ' ', push 'sheep...'. all together gives: "number sheep...number sheep... etc."
        result.push(i);
        result.push(' ');
        result.push('sheep...');
    }
    return result.join(''); // return as string
  }

console.log(countSheep(3));