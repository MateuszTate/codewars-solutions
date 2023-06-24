function noBoringZeros(n) {
    n = n.toString();
    n = [...n];
    n = n.reverse();
    // return n;
    for (element of n){
        if (element==='0'){
            let indeks = n.indexOf(element);
            delete n[indeks];
        }
        else {
            break;
        }
    }
    n = n.reverse().join('');
    return Number(n);
  }

console.log(noBoringZeros(13400));