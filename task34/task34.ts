let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

console.log("My favorite pizzas:");
for (let pizza of favoritePizzas) {
    console.log(pizza);
}

console.log("\nMy thoughts on each pizza:");
for (let pizza of favoritePizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\nI really love pizza!");
