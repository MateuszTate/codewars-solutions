function longest(s1, s2) {
    let s3 = s1+s2; // make one string from two provided in function
    s3 = [...new Set(s3)] // make s3 string an array and remove duplicates
    return s3.sort().join(''); // return sorted and make it a string again by join
  }

console.log(longest("aretheyhere", "yestheyarehere"));