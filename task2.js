/**
 * Finds the first occurrence of the needle in the haystack using the KMP algorithm.
 *
 * @param {string} haystack - The string in which to search.
 * @param {string} needle - The substring to search for.
 * @return {number} - The index of the first occurrence of needle in haystack, or -1 if not found.
 */
function findFirstOccurrence(haystack, needle) {
    // If needle is an empty string, return 0 as per the problem statement.
    if (needle.length === 0) return 0;

    // Compute the LPS (Longest Prefix Suffix) array for the needle.
    const lps = computeLPSArray(needle);
    let i = 0, j = 0; // i is the index for haystack, j is the index for needle.

    // Iterate through haystack to find the needle.
    while (i < haystack.length) {
        // If characters match, move both indices forward.
        if (haystack[i] === needle[j]) {
            i++;
            j++;
            // If we reach the end of the needle, a match is found.
            if (j === needle.length) return i - j;
        } else {
            // If characters do not match and j is not 0, use the LPS array.
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++; // If j is 0, move the haystack index forward.
            }
        }
    }

    // If no match is found, return -1.
    return -1;
}

/**
 * Computes the Longest Prefix Suffix (LPS) array for the KMP algorithm.
 *
 * @param {string} pattern - The pattern for which to compute the LPS array.
 * @return {number[]} - The computed LPS array.
 */
function computeLPSArray(pattern) {
    const lps = new Array(pattern.length).fill(0); // Initialize LPS array with zeros.
    let length = 0; // Length of the previous longest prefix suffix.
    let i = 1;

    // Build the LPS array.
    while (i < pattern.length) {
        if (pattern[i] === pattern[length]) {
            length++;
            lps[i] = length;
            i++;
        } else {
            // If characters do not match.
            if (length !== 0) {
                length = lps[length - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }

    return lps;
}
/**
 * Time Complexity: O(n + m), where n is the length of haystack and m is the length of needle.
 * 
 * Space Complexity: O(m), for the LPS array.
 */

// Example usage
console.log(findFirstOccurrence("sadbutsad", "sad")); // Output: 0
console.log(findFirstOccurrence("codemama", "ostad")); // Output: -1
