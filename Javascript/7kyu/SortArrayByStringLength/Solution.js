function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length); // use sort to compare length of array elements and sort array by it
  };


console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]));