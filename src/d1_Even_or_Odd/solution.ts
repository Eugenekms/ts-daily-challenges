/**
 * Task: Even or Odd (Codewars 8kyu)
 * Link: https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
 *
 * Description:
 * Create a function that takes an integer as an argument and returns
 * "Even" for even numbers or "Odd" for odd numbers.
 *
 * Explanation:
 * 1. The function accepts a number (`num: number`).
 * 2. We use the modulo operator (`% 2`) to check the remainder of division by 2.
 * 3. If the remainder is strictly 0 (`=== 0`), the number is even, and we return "Even".
 * 4. Otherwise, the number is odd, and we return "Odd".
 */

function evenOrOdd(num: number) {
  if (num % 2 === 0) {
    return "Even";
  } else return "odd";
}

// Local verification:
console.log(evenOrOdd(2)); // Expected: Even
console.log(evenOrOdd(5)); // Expected: odd
