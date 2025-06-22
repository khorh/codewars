/**
 * Kata - 6kyu by JKphobic
 * You live in the city of Cartesia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
 * The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
 * You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point.
 * Return false otherwise.
 */

const isValidWalk = (walk) => {
  // Check directions to ensure there are ten directions
  const checkNumberOfDirections = walk.length === 10;
  console.log(checkNumberOfDirections);
  if (checkNumberOfDirections) {
    // Count how many of n and e and separately s and w
    const countDirectionNE =
      walk.filter((direction) => direction === "n" || direction === "e")
        .length === 5;
    console.log(countDirectionNE);
    const countDirectionSW =
      walk.filter((direction) => direction === "s" || direction === "w")
        .length === 5;
    console.log(countDirectionSW);
    // Check if the person goes back to original place i.e where n or e are equivalent to 1 and s or w is -1
    const returnBackToOriginalPlace = countDirectionNE && countDirectionSW;
    console.log(returnBackToOriginalPlace);
    return returnBackToOriginalPlace;
  } else {
    return false;
  };
};

// console.log(isValidWalk(["w"]));
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]));
// console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]));
// console.log(isValidWalk(["n", "n", "n", "e", "s", "s", "e", "s", "w", "w"]));

// Co-pilot answer
const isValidWalkCoPilot = (walk) => {
  if (walk.length !== 10) return false;
  let x = 0,
    y = 0;
  for (let dir of walk) {
    if (dir === "n") y++;
    else if (dir === "s") y--;
    else if (dir === "e") x++;
    else if (dir === "w") x--;
    else return false; // invalid direction
  }
  return x === 0 && y === 0;
};
