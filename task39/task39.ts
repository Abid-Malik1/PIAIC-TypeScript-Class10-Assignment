function cityCountry(city: string, country: string): string {
    return `${city}, ${country}`;
}

const location1 = cityCountry("Lahore", "Pakistan");
const location2 = cityCountry("Paris", "France");
const location3 = cityCountry("New York", "USA");

console.log(location1);
console.log(location2);
console.log(location3);
