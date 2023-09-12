let dinnerGuests6: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
];
let unableToAttend6 = "Ada Lovelace";
let newGuest6 = "Marie Curie";
let additionalGuest = "Isaac Newton";
let indexOfunableToAttend6 = dinnerGuests6.indexOf(unableToAttend6);
if (indexOfunableToAttend6 !== -1) {
  dinnerGuests6[indexOfunableToAttend6] = newGuest6;
}
dinnerGuests6.unshift(additionalGuest);

console.log("Invitation Messages for the First Set of Guests:");
for (let guest of dinnerGuests6) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend6} can't make it to the dinner.\n`);

console.log("Invitation Messages for the Second Set of Guests:");
for (let guest of dinnerGuests6) {
  console.log(
    `Dear ${guest},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(
  "Good news! We've found a bigger dinner table to accommodate more guests."
);
