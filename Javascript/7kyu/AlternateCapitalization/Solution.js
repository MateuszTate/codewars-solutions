function capitalize(s) {
    let odd = s.split("");
    let even = s.split(""); // make arrays from strings
    for (let i = 1; i < s.length; i += 2) {
        odd[i] = odd[i].toUpperCase();
        even[i - 1] = even[i - 1].toUpperCase(); // make uppercase in even/odd indexes
    }
    if (s.length % 2 !== 0) {
        even[even.length - 1] = even[even.length - 1].toUpperCase(); // make last index of even uppercase if its length %2 not equal to 0
    }
    return [even.join(""), odd.join("")]; // return array of strings as function output
}

console.log(capitalize("abcdef"));
