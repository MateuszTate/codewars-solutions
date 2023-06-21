function alphanumeric(string) {
    var canContain = /^[a-zA-Z0-9]+$/; // this characters are the only valid 
    return canContain.test(string); // test if string contains only them and return true/false
}

console.log(alphanumeric("  "));
