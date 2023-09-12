let dinnerGuests3: string[] = [
  "Albert Einstein",
  "Ada Lovelace",
  "Nelson Mandela",
];
let unableToAttend2 = "Ada Lovelace";
let newGuest2 = "Marie Curie";
let indexOfunableToAttend2 = dinnerGuests3.indexOf(unableToAttend2);
if (indexOfunableToAttend2 !== -1) {
  dinnerGuests3[indexOfunableToAttend2] = newGuest2;
}

for (let guest of dinnerGuests3) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend2} can't make it to the dinner.`);
