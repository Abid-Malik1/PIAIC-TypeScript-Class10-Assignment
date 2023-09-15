let animals: string[] = ["Dog", "Cat", "Rabbit"];

console.log("Common characteristic: They are all mammals.");
console.log("\nNames of animals:");
for (let animal of animals) {
    console.log(animal);
}

console.log("\nStatements about each animal:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

console.log("\nAny of these animals would make a great pet!");
