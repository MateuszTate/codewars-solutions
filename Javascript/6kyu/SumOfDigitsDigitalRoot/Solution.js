function digitalRoot(n) {
    n = n.toString().split('');
    let sum = 0
    for(let i = 0; i<n.length; i++){
        sum+=Number(n[i]);
        if(sum>9 && i == n.length-1){
            n = sum.toString().split('');
            i = -1;
            sum = 0;
        }
    }
    return sum
  }

console.log(digitalRoot(698680));