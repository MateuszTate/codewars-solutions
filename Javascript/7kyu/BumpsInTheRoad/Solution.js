function bump(x){
    x=x.split("").sort().reverse(); // make x an array, sort it alphabetically and reverse
    if(x[15]==='n') return "Car Dead"; // if 15 element of array is equal to 'n' that means car is dead
    return "Woohoo!"; // else you survived
}

console.log(bump("nnn_n__n_n___nnnnn___n__nnn__"));