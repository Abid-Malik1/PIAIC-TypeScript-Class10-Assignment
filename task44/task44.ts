function makeSandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
      console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!\n");
  }
  
  makeSandwich("Ham", "Cheese", "Lettuce");
  makeSandwich("Turkey", "Swiss Cheese", "Tomato", "Mustard");
  makeSandwich("Peanut Butter", "Jelly");
  