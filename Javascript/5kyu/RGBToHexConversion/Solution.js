function rgb(r, g, b) {
    // first, round every number that is out of scale to the nearest valid value. then, perform a simple calculation required for this conversion: divide the value of the first letter by 16 and round it down to the nearest integer (for example, 3.75 will be rounded down to 3 using the Math.floor function), and perform the same operation with the second letter, but instead of division, use the modulo operator (%).
    if (r > 255) r = 255;
    else if (r < 0) r = 0;

    let mainDividingR = Math.floor(r / 16);
    let restOfDividingR = Math.floor(r % 16);

    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    let mainDividingG = Math.floor(g / 16);
    let restOfDividingG = Math.floor(g % 16);

    if (b > 255) b = 255;
    else if (b < 0) b = 0;

    let mainDividingB = Math.floor(b / 16);
    let restOfDividingB = Math.floor(b % 16);

    let result = ""; // string variable for hexadecimal version of string

    // .toString(16) converts number to the hexadecimal. by result+= I am making one string from these 6 numbers
    result += mainDividingR.toString(16);
    result += restOfDividingR.toString(16);
    result += mainDividingG.toString(16);
    result += restOfDividingG.toString(16);
    result += mainDividingB.toString(16);
    result += restOfDividingB.toString(16);

    return result.toUpperCase(); // return result as function output but uppercase
}

console.log(rgb(300, 255, 255));
