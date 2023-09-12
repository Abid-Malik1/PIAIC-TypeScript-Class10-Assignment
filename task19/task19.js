var dinnerGuests6 = [
    "Albert Einstein",
    "Marie Curie",
    "Nelson Mandela",
];
var unableToAttend6 = "Ada Lovelace";
var newGuest6 = "Marie Curie";
var additionalGuest = "Isaac Newton";
var indexOfunableToAttend6 = dinnerGuests6.indexOf(unableToAttend6);
if (indexOfunableToAttend6 !== -1) {
    dinnerGuests6[indexOfunableToAttend6] = newGuest6;
}
dinnerGuests6.unshift(additionalGuest);
console.log("Invitation Messages for the First Set of Guests:");
for (var _i = 0, dinnerGuests6_1 = dinnerGuests6; _i < dinnerGuests6_1.length; _i++) {
    var guest = dinnerGuests6_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend6, " can't make it to the dinner.\n"));
console.log("Invitation Messages for the Second Set of Guests:");
for (var _a = 0, dinnerGuests6_2 = dinnerGuests6; _a < dinnerGuests6_2.length; _a++) {
    var guest = dinnerGuests6_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Good news! We've found a bigger dinner table to accommodate more guests.");
