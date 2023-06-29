function remove (string) {
    string = [...string];
    if(string[string.length-1]=='!'){
        string.pop();
    }
    return string.join('');
  }

  console.log(remove('123!'))