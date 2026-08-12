/**
 * Challenge: The Palindrome Hunter
 *
 * Goal: Filter an array of strings and keep only the palindromes.
 */

function isPalindrome(word: string): boolean {
  // Convert the entire string to lowercase to handle mixed-case inputs (e.g., "Anna")
  let cleanWord = word.toLowerCase();

  // Convert string to an array of characters, reverse it, and join it back into a string
  let revWord = word.toLowerCase().split("").reverse().join("");

  // Compare the original clean word with the reversed one
  return cleanWord === revWord;
}

// export function filterPalindromes(words: string[]): string[] {
//   let result: string[] = [];
//   for (let word of words) {
//     if (isPalindrome(word)) {
//       result.push(word);
//     }
//   }
//   return result;
// }

export function filterPalindromes(words: string[]): string[] {
  return words.filter((word) => isPalindrome(word));
}

const inputWords = ["anna", "hello", "level", "world", "racecar", "typescript"];
console.log("Found palindromes:", filterPalindromes(inputWords));
