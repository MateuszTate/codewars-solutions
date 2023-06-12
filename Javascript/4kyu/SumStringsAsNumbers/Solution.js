function sumStrings(a,b) {
    a = BigInt(a); // changing type of a and b with BigInt. Number() won't work because arguments will lose precision when are too big 
    b = BigInt(b);
    let result = a+b; // add arguments
    let resultString = result.toString(); // result as string
    return resultString; // return output
}

console.log(sumStrings('123','456'));