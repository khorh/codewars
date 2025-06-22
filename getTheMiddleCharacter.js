/**
 * Kata - 7 kyu by Shivo
 * You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
 * If the string's length is odd, return the middle character.
 * If the string's length is even, return the middle 2 characters.
 * Example 1: "test" --> "es"
 * Example 2: "testing" --> "t"
 * Example 3: "middle" --> "dd"
 * Example 4: "A" --> "A"
 */
const getTheMiddleCharacter = (word) => {
    // Get the word length
    const wordLength = word.length;
    // Determine if the word has even or odd length
    const evenOrOdd = wordLength % 2 === 0 ? "Even" : "Odd";
    // Get the middle two letters if even and the middle letter if odd
    const middleNumber = wordLength / 2;
    const middleCharacters = evenOrOdd === "Even" ? `${word[middleNumber - 1]}${word[middleNumber]}` : word[middleNumber - 0.5];
    return middleCharacters;
};

/**
 * Reasoning
 * .length to help determine whether the word is even or odd
 * modulus to determine if the word length is divisble with no remainder
 * ternary operator to show the middle characters depending if the word is even or odd
 */

// Test
const getTheMiddleCharacterTest = getTheMiddleCharacter("test") === "es" ? "getTheMiddleCharacter('Test') - Pass" : "Fail";
console.log(getTheMiddleCharacterTest);
const getTheMiddleCharacterTesting = getTheMiddleCharacter("testing") === "t" ? "getTheMiddleCharacter('Testing') - Pass" : "Fail";
console.log(getTheMiddleCharacterTesting);
const getTheMiddleCharacterMiddle = getTheMiddleCharacter("middle") === "dd" ? "getTheMiddleCharacter('Middle') - Pass" : "Fail";
console.log(getTheMiddleCharacterMiddle);
const getTheMiddleCharacterA = getTheMiddleCharacter("A") === "A" ? "getTheMiddleCharacter('A') - Pass" : "Fail";
console.log(getTheMiddleCharacterA);

// Co-pilot answer
const getTheMiddleCharacterCoPilot = (word) => {
  const len = word.length;
  const mid = Math.floor(len / 2);
  return len % 2 === 0
    ? word.slice(mid - 1, mid + 1)
    : word.charAt(mid);
};