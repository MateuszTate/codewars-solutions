function multiTable(number) {
    let str = ""; // string for function output
    for(let i = 1; i<=10; i++){
        str+=`${i} * ${number} = ${i*number}\n`; // add current multiplication to the string
    }
    str = str.split('');
    str.splice(str.length-1, 1); // delete last \n from the string
    return str.join(''); // return output
  }

console.log(multiTable(5));