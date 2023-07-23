function peopleWithAgeDrink(old) {
    let drink = 'toddy'; // make toddy as 'default' to make one less if
    if(old>13 && old<18) drink = 'coke';
    else if(old>=18 && old<21) drink = 'beer';
    else if(old>=21) drink = 'whisky';
    return 'drink ' + drink; // return 'drink ' and drink variable together as one string
  };