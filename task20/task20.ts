let dinnerGuests7: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
];
let unableToAttend7 = "Ada Lovelace";
let newGuest7 = "Marie Curie";
let additionalGuest1 = "Isaac Newton";
let guestToAddToMiddle = "Charles Darwin";
let guestToAppendToEnd = "Galileo Galilei";
let indexOfunableToAttend7 = dinnerGuests7.indexOf(unableToAttend7);
if (indexOfunableToAttend7 !== -1) {
  dinnerGuests7[indexOfunableToAttend7] = newGuest7;
}

dinnerGuests7.unshift(additionalGuest1);

let middleIndex = Math.floor(dinnerGuests7.length / 2);
dinnerGuests7.splice(middleIndex, 0, guestToAddToMiddle);

dinnerGuests7.push(guestToAppendToEnd);

console.log("Invitation Messages for All Guests:");
for (let guest of dinnerGuests7) {
  console.log(
    `Dear ${guest},\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
  );
}

console.log(
  "Good news! We've found a bigger dinner table to accommodate more guests."
);
