var humanYearsCatYearsDogYears = function(humanYears) {
    let result = []; // empty array for result

    if (humanYears===1) {
        result.push(1)
        result.push(15)
        result.push(15)
    }
    else if (humanYears===2) {
        result.push(2)
        result.push(24)
        result.push(24)
    }

    // if humanYears 1 or 2 just return it brutal way

    else if (humanYears>2){
        result.push(humanYears);
        let catYears = 24+(4*(humanYears-2));
        let dogYears = 24+(5*(humanYears-2));
        result.push(catYears);
        result.push(dogYears);

        // push humanYears first and then 4*for every year higher than 2 for cat, and 5* for a dog

    }
    
    return result; // return result array with solution
  }
  