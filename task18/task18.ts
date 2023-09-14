
let placesToVisit: string[] = [
    "Abid",
    "Ali",
    "Asad",
    "Ahmad",
    "Umar"
];

console.log("Original Order:");
console.log(placesToVisit);

console.log("\nAlphabetical Order:");
console.log([...placesToVisit].sort());

console.log("\nOriginal Order (still):");
console.log(placesToVisit);

console.log("\nReverse Alphabetical Order:");
console.log([...placesToVisit].sort().reverse());

console.log("\nOriginal Order (still):");
console.log(placesToVisit);


placesToVisit.reverse();
console.log("\nReversed Order:");
console.log(placesToVisit);

placesToVisit.reverse();
console.log("\nOriginal Order (again):");
console.log(placesToVisit);

placesToVisit.sort();
console.log("\nSorted Alphabetical Order:");
console.log(placesToVisit);

placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted Reverse Alphabetical Order:");
console.log(placesToVisit);
