function take(arr, n) {
    if (arr.length==0) return [];
    if (n>arr.length) return arr;
    let result = [];
    for(let i = 0; i < n; i++){
        result.push(arr[i]);
    }
    return result;
  }

console.log(take([-10,-40,-5,-6,19,-69,-26,-46,12,37,2,-56,60], 86));