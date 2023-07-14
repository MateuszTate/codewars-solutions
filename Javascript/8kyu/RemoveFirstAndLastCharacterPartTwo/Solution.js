function array(string) {
    string = string.split(","); // make array from string (comma means it's new element)
    if (string.length < 3) return null; // return null if there is too less elements
    string.pop(); // pop removes the last element (actually creates a new variable from the last element, returning string.pop() wouldn't give me an array without the last element, but only the last element)
    string.shift(); // ^same^ but for the first element
    return string.join(" "); // return array as string separated by space
}

console.log(array("1,2,3,4"));
