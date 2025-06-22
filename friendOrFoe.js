/**
 * Kata - 7 kyu by Aweson1
 * Make a program that filters a list of strings and returns a list with only your friends name in it.
 * If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
 * Example 1: Input = ["Ryan", "Kieran", "Jason", "Yous"] Output = ["Ryan", "Yous"]
 * Example 2: Input = ["Peter", "Stephen", "Joe"] Output = []
 */
const friend = (friends) => {
    // Create an empty list to insert the friend(s)
    let list = [];
    // Count the number of characters per element in the array and if its 4, then add it into the empty array
    for (let i = 0; i < friends.length; i++) {
        friends[i].length === 4 ? list.push(friends[i]) : "";
    };
    // Output this new list of friend(s)
    return list;
};

/**
 * Reasoning
 * for loop iterates through the array of names
 * .length is to calculate the number of characters for each name
 * ternary operator is used to check for the condition
 * .push is to add the name into the empty array on each iteration
 */

// Test
const friendRyanKieranJasonYous = friend(["Ryan", "Kieran", "Jason", "Yous"]).join("") === "RyanYous" ? "friendOrFoe(['Ryan', 'Kieran', 'Jason', 'Yous']) - Pass" : "friendOrFoe - Fail";
console.log(friendRyanKieranJasonYous);

// Co-pilot answer
const friendCoPilot = (friends) => {
  return friends.filter(name => name.length === 4);
};
