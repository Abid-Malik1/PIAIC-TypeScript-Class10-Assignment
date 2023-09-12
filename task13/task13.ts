let dinnerGuests1: string[] = [
  "Albert Einstein",
  "Ada Lovelace",
  "Nelson Mandela",
];
let unableToAttend = "Ada Lovelace";
let newGuest = "Marie Curie";

let indexOfUnableToAttend = dinnerGuests1.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
  dinnerGuests1[indexOfUnableToAttend] = newGuest;
}

for (let guest of dinnerGuests1) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}
