var dinnerGuests81 = [
    "Albert Einstein",
    "Marie Curie",
    "Nelson Mandela",
    "Charles Darwin",
    "Galileo Galilei",
];
var unableToAttend8 = "Ada Lovelace";
var newGuest8 = "Marie Curie";
var additionalGuest21 = "Isaac Newton";
var guestToAddToMiddle1 = "Charles Darwin";
var guestToAppendToEnd1 = "Galileo Galilei";
var indexOfunableToAttend8 = dinnerGuests81.indexOf(unableToAttend8);
if (indexOfunableToAttend8 !== -1) {
    dinnerGuests81[indexOfunableToAttend8] = newGuest8;
}
dinnerGuests81.unshift(additionalGuest21);
var middleIndex1 = Math.floor(dinnerGuests81.length / 2);
dinnerGuests81.splice(middleIndex1, 0, guestToAddToMiddle1);
dinnerGuests81.push(guestToAppendToEnd1);
console.log("I can only invite two people for dinner.");
while (dinnerGuests81.length > 2) {
    var removedGuest = dinnerGuests81.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
console.log("Dear ".concat(dinnerGuests81[0], ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
console.log("Dear ".concat(dinnerGuests81[1], ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
dinnerGuests81.pop();
dinnerGuests81.pop();
console.log("Guest list is now empty:", dinnerGuests81);
