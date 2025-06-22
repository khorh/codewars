/**
 * Your job is to write a function which increments a string, to create a new string.
 * If the string already ends with a number, the number should be incremented by 1.
 * If the string does not end with a number. the number 1 should be appended to the new string.
 * Example 1: foo -> foo1
 * Example 2: foobar23 -> foobar24
 * Example 3: foo0042 -> foo0043
 * Example 4: foo9 -> foo10
 * Example 5: foo099 -> foo100
 * Attention: If the number has leading zeros the amount of digits should be considered.
 */

const incrementString = (strng) => {
    // Check if the string contains a number
    const checkForNumber = /\d/.test(strng);
    // If the string contains number, increment by 1 others add 1
    if(checkForNumber) {
        // Extract letters from string
        const extractLetters = strng.replace(/[^A-Za-z]/g, "");
        console.log(extractLetters);
        // Extract numbers from string
        const extractNumbers = strng.match(/\d+/)[0];
        console.log(extractNumbers)
        // Extract the zeros at the beginning of the numbers
        const extractZeros = extractNumbers.match(/^0+(?=\d)/) ? extractNumbers.match(/^0+(?=\d)/)[0] : "";
        console.log(extractZeros);
        const extractZerosRemoveOneZero = extractZeros.substring(1);
        console.log(extractZerosRemoveOneZero);
        // Change to number and add one
        const changeToNumber = parseInt(extractNumbers);
        const incrementNumber = changeToNumber + 1;
        // Remove one zero if the number starts with a nine
        const removeExtraZeroIfNine = changeToNumber.toString().charAt(0) === "9" ? extractZerosRemoveOneZero : extractZeros;
        console.log(removeExtraZeroIfNine)
        return `${extractLetters}${removeExtraZeroIfNine}${incrementNumber}`;
    } else {
        return `${strng}1`;
    };
};

// console.log(incrementString("foo"));
// console.log(incrementString("foobar99"));
// console.log(incrementString("foo0042"));
// console.log(incrementString("foo9"));
console.log(incrementString("foo099"));

// Co-pilot answer
// function incrementString(str) {
//     const match = str.match(/(\d*)$/);
//     const number = match[0];
//     const prefix = str.slice(0, -number.length);

//     if (number === "") {
//         return str + "1";
//     } else {
//         const incremented = (parseInt(number, 10) + 1).toString();
//         // Pad with leading zeros if needed
//         const padded = incremented.padStart(number.length, "0");
//         return prefix + padded;
//     }
// }