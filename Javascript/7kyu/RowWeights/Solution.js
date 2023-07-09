function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0; // variables for both sums equal to 0 at the start
    for(let i = 0; i<array.length; i++){
        if(i%2==0) sum1+=array[i]; // if current index is even number add it to the sum1
        else if(i%2!=0) sum2+=array[i]; // if current index is odd number add it to the sum2
    }
    return [sum1, sum2]; // return sum1, sum2 as an array; 
  }

console.log(rowWeights([100,50,5,2]));