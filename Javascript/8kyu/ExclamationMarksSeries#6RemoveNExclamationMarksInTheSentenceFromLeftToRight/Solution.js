function remove(s, n) {
    s = s.split(""); // make array from string
    let counter = 0; // define counter variable equal to 0
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "!") {
            // delete ! from array and increment counter
            s.splice(i, 1);
            i--;
            counter++;
        }
        if (counter === n) break; // stop deleting ! from array if counter is equal to n
    }
    return s.join(""); // return array as string without !
}

console.log(remove("!H!i!", 2));
