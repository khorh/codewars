/**
 * You probably know the "like" system from Facebook and other pages. 
 * People can "like" blog posts, pictures or other items. 
 * We want to create the text that should be displayed next to such an item.
 * Implement the function which takes an array containing the names of people that like an item. 
 * It must return the display text as shown in the examples:
 * Example 1: [] --> "no one likes this"
 * Example 2: ["Peter"] --> "Peter likes this"
 * Example 3: ["Jacob", "Alex"] --> "Jacob and Alex like this"
 * Example 4: ["Max", "John", "Mark"] --> "Max, John and Mark like this"
 * Example 5: ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"
 */
const whoLikesThis = (names) => {
    // Determine the number of elements in the array
    const namesLength = names.length;
    // Determine the length without the first two elements
    const namesLengthMinusTwo = namesLength - 2; 
    // Create the conditional statement depending on the number of elements
    if (names.length === 0) {
        return "no one likes this";
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else {
        return `${names[0]}, ${names[1]} and ${namesLengthMinusTwo} others like this`; 
    };
};

/**
 * Reasoning
 * .length to determine the number of elements in the array as it affects the conditional statement
 * if else conditional statement to output different statements based on the number of elements in array
 * template literals to dynamically create the statements
 */

// Tests
const whoLikesThisNone = whoLikesThis([]) === "no one likes this" ? "whoLikesThis([]) - Pass": "whoLikesThis([]) - Fail";
console.log(whoLikesThisNone);
const whoLikesThisPeter = whoLikesThis(["Peter"]) === "Peter likes this" ? "whoLikesThis(['Peter']) - Pass": "whoLikesThis(['Peter']) - Fail";
console.log(whoLikesThisPeter);
const whoLikesThisJacobAlex = whoLikesThis(["Jacob", "Alex"]) === "Jacob and Alex like this" ? "whoLikesThis(['Jacob', 'Alex']) - Pass": "whoLikesThis(['Jacob', 'Alex']) - Fail";
console.log(whoLikesThisJacobAlex);
const whoLikesThisMaxJohnMark = whoLikesThis(["Max", "John", "Mark"]) === "Max, John and Mark like this" ? "whoLikesThis(['Max', 'John', 'Mark']) - Pass": "whoLikesThis(['Max', 'John', 'Mark']) - Fail";
console.log(whoLikesThisMaxJohnMark);
const whoLikesThisAlexJacobMarkMax = whoLikesThis(["Alex", "Jacob", "Mark", "Max"]) === "Alex, Jacob and 2 others like this" ? "whoLikesThis(['Alex', 'Jacob', 'Mark', 'Max']) - Pass": "whoLikesThis(['Alex', 'Jacob', 'Mark', 'Max']) - Fail";
console.log(whoLikesThisAlexJacobMarkMax);

// Co-pilot answer
const whoLikesThisCoPilot = (names) => {
  switch (names.length) {
    case 0: return "no one likes this";
    case 1: return `${names[0]} likes this`;
    case 2: return `${names[0]} and ${names[1]} like this`;
    case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  };
};