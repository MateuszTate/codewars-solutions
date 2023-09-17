function findOutlier(integers){
    let counter = 0;
    for (let index = 0; index < integers.length; index++) {
        if(integers[index]%2 == 0){
            counter++;
        }
    }
    
    let lookingFor = 1;
    if(counter == 1){
            lookingFor = 0;
    }
    for (let index = 0; index < integers.length; index++) {
        if(integers[index]%2 == lookingFor || integers[index]%2 == lookingFor*(-1)){
            return integers[index];
        }
    }
        
  }

console.log(findOutlier([-124234240,124084086,-126051816,153826048,181946862,55818020,26471414,50010088,56818370,-131419459,133331268,-195105744,83630866,177613798]));