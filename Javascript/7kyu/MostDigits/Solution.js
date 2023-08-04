function findLongest(array){
  for (let index = 0; index < array.length; index++) {
    array[index] = array[index].toString();
  }
  let result = array[0].length
  let actualresult = Number(array[0]);
  for (let index = 0; index < array.length; index++) {
    if(array[index].length>result){
        result = array[index].length;
        actualresult = Number(array[index]);
    }
    
  }
  return actualresult;
}

console.log(findLongest([9000, 8, 800]));