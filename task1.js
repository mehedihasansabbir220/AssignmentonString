/**
 * Shuffles the given string according to the specified indices.
 *
 * @param {string} originalString - The string to be shuffled.
 * @param {number[]} shuffleIndices - The array indicating the new positions of characters.
 * @return {string} - The shuffled string.
 */
function shuffleString(originalString, shuffleIndices) {
    // Initialize an array to hold the shuffled characters.
    let shuffledStringArray = new Array(originalString.length);

    // Place each character at its new position according to shuffleIndices.
    for (let i = 0; i < shuffleIndices.length; i++) {
        shuffledStringArray[shuffleIndices[i]] = originalString[i];
    }

    // Join the array into a single string and return it.
    return shuffledStringArray.join('');
}
/**
 * Time Complexity: O(n), where n is the length of the string originalString.
 * 
 * Space Complexity: O(n), for the shuffledStringArray.
 */

// Example usage
console.log(shuffleString("mamacode", [4, 5, 6, 7, 0, 1, 2, 3])); // Output: "codemama"
console.log(shuffleString("dosta", [4, 0, 1, 2, 3])); // Output: "ostad"
console.log(shuffleString("abc", [1, 0, 2])); // Output: "bac"
