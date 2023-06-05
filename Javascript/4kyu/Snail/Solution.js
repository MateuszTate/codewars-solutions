snail = function(array) {
  const result = []; // empty array for result 

  // while loop going as long as array is not empty
  while (array.length > 0) {
    result.push(...array.shift()); // getting first element by using shift(). this method take first element of array and by using push I am throwing it to the result array. by using [...] output wont be a whole array [[1,2,3],1,2,3] but [1,2,3,1,2,3]

    for (let i = 0; i < array.length; i++) {
      result.push(array[i].pop()); // pop works like shift, but it takes last element and not first. so I am using pop to the down border of snail
    }

    if (array.length > 0) { // if array still has got any elements
      result.push(...array.pop().reverse()); // reverse array by using reverse() and put every element to the result array
    }

    for (let i = array.length - 1; i >= 0; i--) { // go backwars from bottom to top
      result.push(array[i].shift()); // take first element (shift()) of an array
    }
  }
  // its looped y while as long as array is empty.

  return result; // return result as function snail output
}

console.log(snail([[1, 2, 3, 1], [4, 5, 6, 4], [7, 8, 9, 7 ], [7, 8, 9, 7]]));

console.log(snail([[1,2,3],
  [4,5,6],
  [7,8,9]]));