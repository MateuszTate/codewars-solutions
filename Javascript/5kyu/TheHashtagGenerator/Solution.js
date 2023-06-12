function generateHashtag (str) {
    str = str.trim();
    let newstr = str.replace(/\s+/g,' ').trim();
    if(newstr.length>=140){ return false;}
    if(str.length==0) return false;
    
    str = [...str];
    for(let i = 0; i<=str.length; i++){

       if(str[i]==' ' && str[i+1].match(/[a-z]/i)){
        str[i+1]=str[i+1].toUpperCase();
       }
    }
    
    str.unshift("#");
    str[1] = str[1].toUpperCase();
    str = str.join('');
    str = str.replace(/\s/g, '');
    
    return str;
}

console.log(generateHashtag("code" + " ".repeat(140) + "wars"));