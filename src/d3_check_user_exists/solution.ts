/**
 * Challenge: Check User Existence in API Response
 *
 * Uses .some() for a simple Yes/No (boolean) check.
 * - .some()   -> Yes / No (boolean)
 * - .find()   -> Actual Item (object)
 * - .filter() -> Multiple Items (array)
 */

interface User {
    id: number;
    name: string;
}

export function hasUser(users: User[], targetId: number): boolean {
    return users.some((user) => user.id === targetId);
}

// --- Direct Execution ---
const apiResponse: User[] = [
    { id: 101, name: "Alice" },
    { id: 102, name: "Bob" },
];

console.log("User 101 exists:", hasUser(apiResponse, 101)); // true
console.log("User 999 exists:", hasUser(apiResponse, 999)); // false