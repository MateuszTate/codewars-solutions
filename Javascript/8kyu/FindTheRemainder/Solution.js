function remainder(n, m){
    let first = n;
    let second = m;
    if(m>n){
        first = m;
        second = n;
    }
    if(second===0) return NaN;
    return first%second;
    
  }