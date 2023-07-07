function angle(n) {
    return (n - 2) * 180; // for each polygon it works the same, when n is greater than 2 for each next n just add 180 so 3=180 4=360 etc.
}

console.log(angle(4));
