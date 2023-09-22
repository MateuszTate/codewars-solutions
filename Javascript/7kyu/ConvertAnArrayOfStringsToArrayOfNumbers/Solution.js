function toNumberArray(stringarray){
    let result = [];
    stringarray.forEach(element => {
        result.push(Number(element));
    });
    return result;
}

console.log(toNumberArray(['1.1', '2', '3']));