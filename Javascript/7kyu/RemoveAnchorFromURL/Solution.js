function removeUrlAnchor(url){
    url = [...url];
    let howLong = url.length;
    for(let i = 0; i < howLong; i++){
        if(url[i]=='#'){
            url.splice(i,howLong-i);
        }
    }
    return url.join('');
  }

console.log(removeUrlAnchor('www.codewars.com#about'));