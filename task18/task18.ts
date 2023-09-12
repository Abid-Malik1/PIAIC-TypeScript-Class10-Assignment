let dinnerGuests5: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
];
let unableToAttend5 = "Ada Lovelace";
let newGuest5 = "Marie Curie";
let indexOfunableToAttend5 = dinnerGuests5.indexOf(unableToAttend5);
if (indexOfunableToAttend5 !== -1) {
  dinnerGuests5[indexOfunableToAttend5] = newGuest5;
}

dinnerGuests5.push(
  "Leonardo da Vinci",
  "Jane Austen",
  "Martin Luther King Jr."
);

console.log("Invitation Messages for the First Set of Guests:");
for (let guest of dinnerGuests5) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(`Unfortunately, ${unableToAttend5} can't make it to the dinner.\n`);

console.log("Invitation Messages for the Second Set of Guests:");
for (let guest of dinnerGuests5) {
  console.log(
    `Dear ${guest},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(
  "Good news! We've found a bigger dinner table to accommodate more guests."
);
