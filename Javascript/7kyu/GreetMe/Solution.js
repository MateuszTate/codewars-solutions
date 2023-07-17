var greet = function (name) {
    name = name.toLowerCase().split(""); // make array with lower case letters from string (name)
    name[0] = name[0].toUpperCase(); // make first letter uppercase
    return "Hello " + name.join("") + "!"; // add hello, make string again from array, add !
};

console.log(greet("riley"));
