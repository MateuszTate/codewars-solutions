function likes(names) {
    let howmuch = names.length-2 // variable needed for more than 3 likes
    if (names.length==0) return 'no one likes this'; // default if array is empty
    else if (names.length==1) return names[0]+' likes this'; // return the only liker if array has one
    else if (names.length==2) return names[0]+' and '+names[1]+' like this'; // same but with two people
    else if (names.length==3) return names[0]+', '+names[1]+' and '+names[2]+' like this'; // once again but if four people
    else if (names.length>=4){
        
        return names[0]+', '+names[1]+' and '+howmuch+' others like this'; // return first and second of array and the variable howmuch defined earlier
    }
  }

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max']));