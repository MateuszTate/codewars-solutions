function isPangram(string) {
    string = string.toLowerCase();
    string = string.replace(/[^a-z]/g, '');
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    for (let char of alphabet) {
      if (!string.includes(char)) {
        return false;
      }
    }
    
    return true;
  }
  

console.log(isPangram('nik'))