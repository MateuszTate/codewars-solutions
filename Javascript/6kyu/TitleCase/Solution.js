function titleCase(title, minorWords) {
    if(!title) return '';

    if(minorWords){
    minorWords = minorWords.toLowerCase();
    minorWords = minorWords.split(' ');
    }
    title = title.toLowerCase();
    title = title.split(' ');
    for(let i = 0; i < title.length; i++){
        if (minorWords && minorWords.includes(title[i])){

        }
        else {
            let test = title[i].split('');
            test[0] = test[0].toUpperCase();
            test = test.join('');
            title[i] = test;
        }
    }
    let lastChange = title[0].split('');
    lastChange[0] = lastChange[0].toUpperCase();
    lastChange = lastChange.join('');
    title[0] = lastChange;
    return title.join(' ');
    
}

console.log(titleCase('a clash of KINGS'));