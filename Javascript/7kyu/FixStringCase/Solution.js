function solve(s){
    let lowerCases = /^[a-z]+$/;
    let low = 0;
    let upp = 0;
    s = [...s];
    for (element of s){
        if(lowerCases.test(element) === true){
            low++;
        }
        else if(lowerCases.test(element) === false){
            upp++;
        }
    }
    s = s.join('');
    if(low>upp || upp===low){
        return s.toLowerCase();
    }
    else if(upp>low){
        return s.toUpperCase();
    }
}

console.log(solve('Code'));