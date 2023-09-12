let letdinnerGuests3: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
];
let unableToAttend3 = "Ada Lovelace";
let newGuest3 = "Marie Curie";
let indexOfunableToAttend3 = letdinnerGuests3.indexOf(unableToAttend3);
if (indexOfunableToAttend3 !== -1) {
  letdinnerGuests3[indexOfunableToAttend3] = newGuest3;
}

for (let guest of letdinnerGuests3) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend3} can't make it to the dinner.\n`);

for (let guest of letdinnerGuests3) {
  console.log(
    `Dear ${guest},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}
