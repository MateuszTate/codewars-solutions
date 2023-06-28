function firstNonConsecutive (arr) {
    for(let i=0; i<arr.length; i++){
        if(i == arr.length-1) return null;
        if(arr[i]+1 != arr[i+1]){
            return arr[i+1];
        }
    }
    
}

console.log(firstNonConsecutive([1,2,3,5]))