/**
 * Challenge: Sum of Positive
 *
 * Iterates through an array of numbers and calculates the sum of all positive ones.
 *
 * Key concepts used:
 * - for...of loop -> A clean way to iterate over array values when the index is not needed.
 * - Condition (i > 0) -> Filters out negative numbers and zeroes.
 * - Default value -> 'sum' is initialized to 0, which perfectly handles empty arrays
 *                    or arrays containing no positive numbers.
 */

export function sumOfPositive(numbers: number[]): number {
  let sum = 0;
  for (let i of numbers) {
    if (i > 0) {
      sum += i;
    }
  }
  return sum;
}

// --- Direct Execution ---
console.log("Sum of [1, -4, 7, 12]:", sumOfPositive([1, -4, 7, 12])); // expected: 20
console.log("Sum of [-1, -2, -3]:", sumOfPositive([-1, -2, -3])); // expected: 0
console.log("Sum of []:", sumOfPositive([])); // expected: 0
