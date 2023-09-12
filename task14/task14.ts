let letdinnerGuests2: string[] = [
  "Albert Einstein",
  "Ada Lovelace",
  "Nelson Mandela",
];
let unableToAttend1 = "Ada Lovelace";
let newGuest1 = "Marie Curie";
let indexOfunableToAttend1 = letdinnerGuests2.indexOf(unableToAttend1);
if (indexOfunableToAttend1 !== -1) {
  letdinnerGuests2[indexOfunableToAttend1] = newGuest1;
}

for (let guest of letdinnerGuests2) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend1} can't make it to the dinner.`);
