function sumDigits(number) {
    number = number.toString().split(''); // make array from number
    if(number[0]==='-'){
        number.shift(); // delete minus if number is negative
    }
    let result = 0; // variable for sum
    for(let element of number) result+=Number(element); // add every element of number as Int to the result
    return result; // return function output
}


console.log(sumDigits(-32));
