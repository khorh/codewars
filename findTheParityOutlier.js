/**
 * Kata - 6kyu by obnounce
 * You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
 * The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
 * Write a method that takes the array as an argument and returns this "outlier" N.
 * Example 1: [2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
 * Example 2: [160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
 */
const findOutlier = (integers) => {
    // Get even or odd numbers from an array
    const filterEven = integers.filter(integer => integer % 2 === 0);
    const filterOdd = integers.filter(integer => integer % 2 !== 0);
    // Where the length is one that means that its an array with mostly odd numbers 
    const checkLength = filterEven.length === 1 ? filterEven : filterOdd;
    return parseInt(checkLength.join(""));
};

/**
 * Reasoning
 * .filter to filter array based on a condition
 * % modulus to check if interger is even or odd
 * ternary operator to output the correct outlier
 */

// Tests
const findOutlierExample1 = findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) === 11 ? "findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) - Pass" : "findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]) - Fail";
console.log(findOutlierExample1);
const findOutlierExample2 = findOutlier([160, 3, 1719, 19, 11, 13, -21]) === 160 ? "findOutlier([160, 3, 1719, 19, 11, 13, -21]) - Pass" : "findOutlier([160, 3, 1719, 19, 11, 13, -21]) - Fail";
console.log(findOutlierExample2);

// Co-pilot answer
const findOutlierCoPilot = (integers) => {
    const evens = integers.filter(n => n % 2 === 0);
    const odds = integers.filter(n => n % 2 !== 0);
    return evens.length === 1 ? evens[0] : odds[0];
};