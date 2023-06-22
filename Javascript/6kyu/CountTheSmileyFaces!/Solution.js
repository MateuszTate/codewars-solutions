function countSmileys(arr) {
    let result = 0;
    for(element of arr){
        if(element === ':)' || element === ':D' || element === ':-)' || element === ':-D' || element === ':~)' || element === ':~D' || element === ';)' || element === ';D' || element === ';-)' || element === ';-D' || element === ';~)' || element === ';~D'){
            result++;
        }
    }

    // did it the brutal way, just wrote out every possible smile and get it into if statement

    return result;
  }