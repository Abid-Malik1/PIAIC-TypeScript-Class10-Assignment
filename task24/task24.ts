// Tests for equality and inequality with strings
let name1:string = 'John';
let name2:string = 'Alice';

console.log("Test 1: Is name1 equal to 'John'? I predict True.");
console.log(name1 === 'John');

console.log("Test 2: Is name2 not equal to 'John'? I predict True.");
console.log(name2 !== 'John');

let text = 'Hello, World!';

console.log("Test 3: Is text in lowercase equal to 'hello, world!'? I predict True.");
console.log(text.toLowerCase() === 'hello, world!');

let a:number = 10;
let b:number = 20;

console.log("Test 4: Is a less than b? I predict True.");
console.log(a < b);

console.log("Test 5: Is a greater than or equal to b? I predict False.");
console.log(a >= b);

let isSunny:boolean = true;
let isWarm:boolean = false;

console.log("Test 6: Is it sunny and warm? I predict False.");
console.log(isSunny && isWarm);

console.log("Test 7: Is it sunny or warm? I predict True.");
console.log(isSunny || isWarm);

let fruits = ['apple', 'banana', 'cherry'];

console.log("Test 8: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));

console.log("Test 9: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruits.includes('grape'));
