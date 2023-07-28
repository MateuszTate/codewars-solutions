function generateShape(integer){
    let result = ""; // empty variable for resul string
    for(let i = 0; i < integer; i++){
        result += "+".repeat(integer); // add integer times "+"
        if(i<integer-1){ // avoid breaking line at the end of string
            result += "\n";
        }
    }
    return result; // return function output
}

console.log(generateShape(8));