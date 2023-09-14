var cities = [
    { name: "New York City", country: "United States", population: 8398748 },
    { name: "London", country: "United Kingdom", population: 8787892 },
    { name: "Tokyo", country: "Japan", population: 13929286 },
    { name: "Paris", country: "France", population: 2140526 },
];
console.log("City Information:");
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log("City: ".concat(city.name));
    console.log("Country: ".concat(city.country));
    console.log("Population: ".concat(city.population));
    console.log("--------------");
}
