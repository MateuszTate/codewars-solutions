function duckDuckGoose(players, goose) {
    let index = 0;
    if(goose>players.length){
        index = (goose%players.length);
        if(index == 0) index = players.length-1;
        else index = (goose%players.length-1);
    }
    else if(goose<=players.length){
        index = goose-1;
    }
    let elementName = '';
    players.forEach(element => {
        if(players.indexOf(element) == index){
            elementName = ((element.name));
        }
    });
    return elementName;
  }

console.log(duckDuckGoose([a = {name: 'a'}, b = {name: 'b'}, c = {name: 'c'}, d = {name: 'd'}, c = {name: 'c'}, e = {name: 'e'}, f = {name: 'f'}, g = {name: 'g'}, h = {name: 'h'}, z = {name: 'z'}], 18));