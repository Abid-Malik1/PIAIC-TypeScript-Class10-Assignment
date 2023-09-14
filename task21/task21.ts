let cities: { name: string; country: string; population: number }[] = [
    { name: "New York City", country: "United States", population: 8398748 },
    { name: "London", country: "United Kingdom", population: 8787892 },
    { name: "Tokyo", country: "Japan", population: 13929286 },
    { name: "Paris", country: "France", population: 2140526 },
];

console.log("City Information:");
for (let city of cities) {
    console.log(`City: ${city.name}`);
    console.log(`Country: ${city.country}`);
    console.log(`Population: ${city.population}`);
    console.log("--------------");
}
