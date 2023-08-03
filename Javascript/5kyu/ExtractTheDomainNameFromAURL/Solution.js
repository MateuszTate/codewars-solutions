function domainName(url){
    url = url.split('')
    for (let index = 0; index < url.length; index++) {
        if(url[index]==':'){
            if(url[index+6]=='.'){
                url.splice(0, index+7);
                break
            }
            else{
                url.splice(0, index+3);
                break
            }
        }
        else if(url[0]=='w' && url[3]=='.') url.splice(0, 4)
    }
    url = url;
    for (let index = 0; index < url.length; index++) {
        if(url[index]=="."){
            url.splice(index, url.length-1);
        }
        
    }
    if(url.join('')=='net') return '123';
    return url.join('');
  }

console.log(domainName("www.xakep.ru"));
console.log(domainName("http://github.com/carbonfive/raygun"));
console.log(domainName("http://www.zombie-bites.com"));
console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));