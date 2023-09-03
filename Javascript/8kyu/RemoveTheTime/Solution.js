function shortenToDate(longDate) {
    return longDate.split('').splice(0, longDate.indexOf(',')).join(''); // make array from string by split, then splice from the beggining and end at ','. return as string by using join
  }

console.log(shortenToDate("Friday May 2, 9am"));