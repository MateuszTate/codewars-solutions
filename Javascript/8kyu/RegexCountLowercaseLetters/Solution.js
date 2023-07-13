function lowercaseCount(str) {
    str = [...str]; // make array from string
    let counter = 0; // counter variable to count how many lowercases
    for (let element of str) {
        if (
            // if element and element to lower case are the same AND element is different than element to upper case increase counter by one.
            // element !== element.toUpperCase() is must have to avoid problems with numbers and special character
            element === element.toLowerCase() &&
            element !== element.toUpperCase()
        ) {
            counter++;
        }
    }
    return counter; // return counter as function output
}
