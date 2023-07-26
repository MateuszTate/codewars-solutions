function pickIt(arr){
    var odd=[],even=[];
    for(let element of arr){
        if(element%2===0) even.push(element); // go by every element, and push every element to corret array
        else odd.push(element);
    }
    
    
    return [odd,even];
  }