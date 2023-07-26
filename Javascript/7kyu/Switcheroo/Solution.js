function switcheroo(x){
    x = x.split(''); // make array from string
    for(let i = 0; i<x.length; i++){
        if(x[i]==='a'){
            x[i]='b'; // set 'a' to 'b'
        }
        else if(x[i]==='b'){
            x[i]='a'; // set 'b' to 'a'
        }
    }
    return x.join(''); // return as string
}

console.log(switcheroo('abc'));