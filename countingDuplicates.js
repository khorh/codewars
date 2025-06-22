/**
 * Count the number of Duplicates
 * Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
 * The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
 * Example 1: "abcde" -> 0 # no characters repeats more than once
 * Example 2: "aabbcde" -> 2 # 'a' and 'b'
 * Example 3: "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
 * Example 4: "indivisibility" -> 1 # 'i' occurs six times
 * Example 5: "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
 * Example 6: "aA11" -> 2 # 'a' and '1'
 * Example 7: "ABBA" -> 2 # 'A' and 'B' each occur twice
 */

const duplicateCount = (text) => {
    // Change to lower case as the count needs to be case insensitive
    const lowerCaseText = text.toLowerCase();
    // Split lower case text to array
    const splitTextIntoArray = lowerCaseText.split("");
    // Count how many of the same letter
    const count = {};
    splitTextIntoArray.forEach(letter => {
        count[letter] = (count[letter] || 0) + 1;       
    });
    return Object.values(count).filter(letter => letter > 1).length;
}

console.log(duplicateCount('aAbcde'));