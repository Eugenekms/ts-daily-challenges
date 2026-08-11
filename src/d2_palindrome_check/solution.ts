/**
 * Checks if a given string is a palindrome (reads the same forwards and backwards).
 * @param word - the input word to check
 * @returns true if the word is a palindrome, false otherwise
 */
function isPalindrome(word: string): boolean {
  // Convert the entire string to lowercase to handle mixed-case inputs (e.g., "Anna")
  let cleanWord = word.toLowerCase();

  // Convert string to an array of characters, reverse it, and join it back into a string
  let revWord = word.toLowerCase().split("").reverse().join("");

  // Compare the original clean word with the reversed one
  return cleanWord === revWord;
}

// Test examples
console.log(isPalindrome("Anna")); // true (case-insensitive)
console.log(isPalindrome("level")); // true
console.log(isPalindrome("PlayWright")); // false
