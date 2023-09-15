function makeShirts(size: string = "Large", message: string = "I love TypeScript"): void {
    console.log(`You have ordered a ${size}-sized shirt with the message: "${message}".`);
}

makeShirts();

makeShirts("Medium");

makeShirts("Small", "TypeScript is awesome!");
