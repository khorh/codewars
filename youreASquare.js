/**
 * Kata - 7 kyu by bkaes
 * Given an integral number, determine if it's a square number.
 * Example 1: -1  =>  false
 * Example 2: 0  =>  true
 * Example 3: 3  =>  false
 * Example 4: 4  =>  true
 * Example 5: 25  =>  true
 * Example 6: 26  =>  false
 */
const isSquare = (number) => {
    const squareRootNumber = Math.sqrt(number);
    const isInteger = Number.isInteger(squareRootNumber);
    return isInteger;
};

/**
 * Reasoning
 * Math.sqrt to square root a number
 * Number.isInteger to determine if the output is a whole number
 */

// Tests
const isSquareMinusOne = isSquare(-1) === false ? "isSquare(-1) - Pass" : "isSquare(-1) - Fail";
console.log(isSquareMinusOne);
const isSquareZero = isSquare(0) === true ? "isSquare(0) - Pass" : "isSquare(0) - Fail";
console.log(isSquareZero);
const isSquareThree = isSquare(3) === false ? "isSquare(3) - Pass" : "isSquare(3) - Fail";
console.log(isSquareThree);
const isSquareFour = isSquare(4) === true ? "isSquare(4) - Pass" : "isSquare(4) - Fail";
console.log(isSquareFour);
const isSquareTwentyFive = isSquare(25) === true ? "isSquare(25) - Pass" : "isSquare(25) - Fail";
console.log(isSquareTwentyFive);
const isSquareTwentySix = isSquare(26) === false ? "isSquare(26) - Pass" : "isSquare(26) - Fail";
console.log(isSquareTwentySix);

// Other Codewar answers
const isSquareCodewar = (number) => {
  return Math.sqrt(number) % 1 === 0;
};