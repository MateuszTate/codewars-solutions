function isOpposite(s1,s2){
    if(s1.length != s2.length || s1.length == 0 || s2.length == 0) return false; // if string are different or shorter than 1 character return false
    s2 = s2.split(''); // array from string
    for (let index = 0; index < s1.length; index++) {
        // change every uppercase character to lowercase and every lowercase to uppercase
        if(s2[index] == s2[index].toUpperCase()){
            s2[index] = s2[index].toLowerCase()
        }
        else if(s2[index] == s2[index].toLowerCase()){
            s2[index] = s2[index].toUpperCase()
        }
    }
    return s1==s2.join(''); // return true if both strings are the same, return false if they are not
  }

console.log(isOpposite("ab","AB"));