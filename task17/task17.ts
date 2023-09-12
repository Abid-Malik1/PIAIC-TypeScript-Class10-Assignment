let dinnerGuests4: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
];
let unableToAttend4 = "Ada Lovelace";
let newGuest4 = "Marie Curie";
let indexOfunableToAttend4 = dinnerGuests4.indexOf(unableToAttend4);
if (indexOfunableToAttend4 !== -1) {
  dinnerGuests4[indexOfunableToAttend4] = newGuest4;
}

dinnerGuests4.push(
  "Leonardo da Vinci",
  "Jane Austen",
  "Martin Luther King Jr."
);

console.log("Invitation Messages for the First Set of Guests:");
for (let guest of dinnerGuests4) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend4} can't make it to the dinner.\n`);

console.log("Invitation Messages for the Second Set of Guests:");
for (let guest of dinnerGuests4) {
  console.log(
    `Dear ${guest},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}
