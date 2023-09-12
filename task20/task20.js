var dinnerGuests7 = [
    "Albert Einstein",
    "Marie Curie",
    "Nelson Mandela",
];
var unableToAttend7 = "Ada Lovelace";
var newGuest7 = "Marie Curie";
var additionalGuest1 = "Isaac Newton";
var guestToAddToMiddle = "Charles Darwin";
var guestToAppendToEnd = "Galileo Galilei";
var indexOfunableToAttend7 = dinnerGuests7.indexOf(unableToAttend7);
if (indexOfunableToAttend7 !== -1) {
    dinnerGuests7[indexOfunableToAttend7] = newGuest7;
}
dinnerGuests7.unshift(additionalGuest1);
var middleIndex = Math.floor(dinnerGuests7.length / 2);
dinnerGuests7.splice(middleIndex, 0, guestToAddToMiddle);
dinnerGuests7.push(guestToAppendToEnd);
console.log("Invitation Messages for All Guests:");
for (var _i = 0, dinnerGuests7_1 = dinnerGuests7; _i < dinnerGuests7_1.length; _i++) {
    var guest = dinnerGuests7_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Good news! We've found a bigger dinner table to accommodate more guests.");
