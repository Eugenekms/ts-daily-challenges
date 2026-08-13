/**
 * Challenge: The Cart Total Calculator
 *
 * Goal: Calculate the total cost of all items in the shopping cart.
 */

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

export function calculateTotal(cart: CartItem[]): number {
  let sum = 0;
  for (let item of cart) {
    let calc = item.price * item.quantity;
    sum += calc;
  }
  return sum;
}

// the same
//export function calculateTotal(cart: CartItem[]): number {
// 'reduce' iterates over the array and accumulates the sum (acc) on each iteration.
// The 0 at the very end is the initial value for 'acc' (similar to your 'let sum = 0').
//return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
//}

const myCart: CartItem[] = [
  { name: "Combination Pliers", price: 14.15, quantity: 2 },
  { name: "Bolt Cutters", price: 45.0, quantity: 1 },
  { name: "Wrench", price: 9.99, quantity: 0 },
  { name: "Hummer", price: 18.9, quantity: 3 },
];

console.log("Total cart price:", calculateTotal(myCart));
