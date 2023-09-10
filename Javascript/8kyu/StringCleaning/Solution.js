function stringClean(s){
    let result = [];
    s = s.split(' ');
    for(let i = 0; i<s.length; i++){
        let tempArr = s[i].split('');
        for(let j = 0; j < tempArr.length; j++){
            if(!isNaN(tempArr[j])){
                tempArr.splice(j, 1);
                j--;
            }
        }
        result.push(tempArr.join(''));
    }
    return result.join(' ');
  }

console.log(stringClean('(E3at m2e2!!)'));