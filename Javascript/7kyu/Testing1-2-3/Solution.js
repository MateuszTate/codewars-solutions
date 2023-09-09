var number=function(array){
    let newArray = [];
    for(let i = 1; i <= array.length; i++){
        let newString = '';
        newString += i + ': ' + array[i-1];
        newArray.push(newString);
    }
    return newArray;
  }

console.log(number(['a', 'b', 'c']));