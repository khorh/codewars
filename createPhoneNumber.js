/**
 * Kata - 6 kyu by xDranik
 * Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
 * Example: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 */
const createPhoneNumber = (numbers) => {
  // Take the first, second and third characters of numbers and change array to text
  const indexZeroTwo = numbers.slice(0, 3).join("");
  // Take the fourth, fifth and sixth characters of numbers and change array to text
  const indexThreeFive = numbers.slice(3, 6).join("");
  // Take the fourth, fifth and sixth characters of numbers and change array to text
  const indexSixNine = numbers.slice(6, 10).join("");
  // Create the final output
  return `(${indexZeroTwo}) ${indexThreeFive}-${indexSixNine}`;
};

/**
 * Reasoning
 * .slice creates a shallow copy of the original array rather than manipulating it
 * .join turns the array into text and "" removes the commas
 * template literals rather than concatenation used to create the final output
 */

// Test
const createPhoneNumber1234567890 =
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) === "(123) 456-7890"
    ? "createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) - Pass"
    : "createPhoneNumber - Fail";
console.log(createPhoneNumber1234567890);

// Co-pilot answer is the same as my answer
