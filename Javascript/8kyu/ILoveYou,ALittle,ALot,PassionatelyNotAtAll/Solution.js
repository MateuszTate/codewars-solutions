function howMuchILoveYou(nbPetals) {
    let modulo; // create variable for modulo
    if (nbPetals%6==0){ // if number / 6 is equal to 0 it means it has to be multiple of 6 so return case number 6 "not at all"
        return 'not at all';
        
    }
    else { // else if numb / 6 is not 0 then modulo has to be equal to the rest of the division number / 6
        modulo = nbPetals%6
    }
    
    switch(modulo){ // switch the rest of the division number / 6 and return right case
        case 1:
            return 'I love you';
        case 2:
            return 'a little';
        case 3:
            return 'a lot';
        case 4:
            return 'passionately';
        case 5:
            return 'madly';
            
    }
}

console.log(howMuchILoveYou(12));
