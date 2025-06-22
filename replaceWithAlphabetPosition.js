/**
 * In this kata you are required to, given a string, replace every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 * "a" = 1, "b" = 2, etc.
 */

const alphabetPosition = (text) => {
    // Change text to lower case
    const lowerCaseText = text.toLowerCase();
    // Remove any spaces and special characters
    const cleanText = lowerCaseText.replace(/[^a-z]/g, '');
    // Separate text into individual letters
    const cleanTextIntoArray = cleanText.split("");
    // Replace alphabets with numbers
    const replaceWithNumbers = cleanTextIntoArray.map(char => char.charCodeAt(0) - 96);
    return replaceWithNumbers.join(' ');
};

console.log(alphabetPosition("The sunset sets at twelve o' clock."))