function reverse(string){
    string = string.split(' ').reverse();
    return string.join(' ');
  }

console.log(reverse('I am an expert at this'));