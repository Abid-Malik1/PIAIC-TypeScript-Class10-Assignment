let numbers: number[] = [1, 2, 3, 4, 5];

let index = 10;
try {
    let value = numbers[index]; 
    console.log(`Value at index ${index}: ${value}`);
} catch (error) {
    console.error("Caught an index error:", error);
}

if (index >= 0 && index < numbers.length) {
    let value = numbers[index];
    console.log(`Value at index ${index}: ${value}`);
} else {
    console.error(`Index ${index} is out of bounds.`);
}
