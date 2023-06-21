function nameShuffler(str){
    str = str.split(' '); // create array from str
    let result = []; // empty array for result output
    result.push(str[1]); // push to the result array last name from str array
    result.push(str[0]); // same with first name
    return result.join(' '); // return output as a string by using join
  }

console.log(nameShuffler('mateusz Lis'));