function cakes(recipe, available) {
    let availableKeys =  Object.keys(available).sort(); // make a sorted arrays of object keys names
    let recipeKeys = Object.keys(recipe).sort();
    for(let element of recipeKeys){
        if(!availableKeys.includes(element)) return 0; // if any recipe key is not in the available keys array return 0 
    }

    let result = []; // an empty array for function result

    for(let element of recipeKeys){
        result.push(available[element] / recipe[element]); // push to the result array the division of available and recipe with the same key name
    }

    return Math.floor(Math.min(...result)); // find the lowest value from result and use floor to avoid returning decimal numbers (e.g., 2.4 with floor() returns 2 because we don't want 0.4 of cake)
  }

console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}));