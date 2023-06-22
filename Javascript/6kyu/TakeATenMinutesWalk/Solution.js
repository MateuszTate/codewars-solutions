function isValidWalk(walk) {
  if (walk.length != 10) return false; // if walk isnt 10 elements long its not 10 minutes walk
  let positionX = 0; // two variables for position east/west and north/south
  let positionY = 0;
  for (element of walk) {
    if (element === "n") positionY++;
    if (element === "s") positionY--;
    if (element === "e") positionX++;
    if (element === "w") positionX--;
  } // change position x and y according to elements of walk
  if (positionX === 0 && positionY === 0)
    return true; // return true if you are back to the default position
  else return false; // otherwise return false
}

console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
