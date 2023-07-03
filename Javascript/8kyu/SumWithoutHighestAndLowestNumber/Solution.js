function sumArray(array) {
    if(array == null) return 0;
    if(array.length<3) return 0
    array = array.sort((a,b)=>a-b);
    let result = 0;
    for(let i = 1; i<array.length-1; i++){
        result+=array[i];
    }
    return result;
}

console.log(sumArray([ 6, 2, 1, 8, 10 ]));