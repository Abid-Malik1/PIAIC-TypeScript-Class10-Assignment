function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1: number = add(5, 3);
let result2: number = subtract(10, 4);

console.log(`5 + 3 = ${result1}`);
console.log(`10 - 4 = ${result2}`);
