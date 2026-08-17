/**
 * Challenge: Shortest Word
 *
 * Goal: Return the length of the shortest word in a given string.
 */

export function findShort(shortest: string): number {
  let minLength = Infinity;
  let words = shortest.split(" ");
  for (let word of words) {
    if (word.length < minLength) minLength = word.length;
  }
  return minLength;
}

console.log(findShort("bitcoin take over the world maybe who knows"));
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones",
  ),
);
console.log(findShort("lets talk about javascript the best language"));
