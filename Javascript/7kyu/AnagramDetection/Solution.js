const isAnagram = function(test, original) {
    const anotherTest = [...test.toLowerCase()].sort();
    const anotherOriginal = [...original.toLowerCase()].sort();
    
    // [...] makes an array from string. for example var myName = "Mateusz" after using myName = [...text] is now ['M','a','t','e','u','s','z']
    // toLowerCase() as name says makes letters lowercase so "Mateusz" is now "mateusz"
    // sort() just sort an array alphabetically.

    // important! you have to use toLowerCase() because sort() is sorting capital letters first. if you use sort() on: array = ['a','B','a'] it will output ['B','a','a'] so its not actually alphabetically

    return anotherTest.join('') === anotherOriginal.join('');

    // join() = array to str cause I can not compare arrays



    // Conclusion: I am making arrays from strs, make them low letters, and sort. I am turning them back to str by join and then compare by using "==="
  };
  
  

console.log(isAnagram("Buckethead", "DeathCubeK"))
