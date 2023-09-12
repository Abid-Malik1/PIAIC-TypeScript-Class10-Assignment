var dinnerGuests5 = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
var unableToAttend5 = "Ada Lovelace";
var newGuest5 = "Marie Curie";
var indexOfunableToAttend5 = dinnerGuests5.indexOf(unableToAttend5);
if (indexOfunableToAttend5 !== -1) {
    dinnerGuests5[indexOfunableToAttend5] = newGuest5;
}
dinnerGuests5.push("Leonardo da Vinci", "Jane Austen", "Martin Luther King Jr.");
console.log("Invitation Messages for the First Set of Guests:");
for (var _i = 0, dinnerGuests5_1 = dinnerGuests5; _i < dinnerGuests5_1.length; _i++) {
    var guest = dinnerGuests5_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend5, " can't make it to the dinner.\n"));
console.log("Invitation Messages for the Second Set of Guests:");
for (var _a = 0, dinnerGuests5_2 = dinnerGuests5; _a < dinnerGuests5_2.length; _a++) {
    var guest = dinnerGuests5_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Good news! We've found a bigger dinner table to accommodate more guests.");
