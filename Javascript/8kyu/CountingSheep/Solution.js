function countSheeps(arrayOfSheep) {
    let VardysOnFire = 0; // result variableeee lalalalalalalalalala
    for(element of arrayOfSheep){ // go through every ele of array
        if(element == true) VardysOnFire++; // if array[] is true add one to result variable
    }
    return VardysOnFire; // return variable
  }

console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));