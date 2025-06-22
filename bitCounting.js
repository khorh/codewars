/**
 * Kata - 6 kyu by xcthulhu
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.
 * You can guarantee that input is non-negative.
 * Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case.
 */
const countBits = (n) => {
    if (n >= 0) {
        // Change positive number to binary
        const changeNumberToBinary = n.toString(2);
        // Count the number of ones in the binary
        const splitBinaryToArray = changeNumberToBinary.split("");
        const countOnes = splitBinaryToArray.filter(number => number === "1").length;
        return countOnes;
    } else {
        return false;
    };
};

/**
 * Reasoning
 * .toString(2) to change the positive number to binary
 * .filter to filter the ones in the binary number
 * .length to count how many ones in the array
 */

// Tests
const countBitsTest = countBits(1234) === 5 ? "countBits(1234) - Pass" : "countBits(1234) - Fail";
console.log(countBitsTest);

// Co-pilot answer
const countBitsCoPilot = (n) => {
    return n.toString(2).split('1').length - 1;
};
