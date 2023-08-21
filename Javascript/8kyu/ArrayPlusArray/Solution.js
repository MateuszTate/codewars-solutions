function arrayPlusArray(arr1, arr2) {
    let size = arr2.length;
    if(arr1 > arr2) size = arr1.length;
    let sum = 0;
    for(let i=0;i<size;i++){
        sum+=arr1[i];
        sum+=arr2[i];
    }
    return sum
  }

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));