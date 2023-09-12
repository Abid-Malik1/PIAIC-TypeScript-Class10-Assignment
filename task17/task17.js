var dinnerGuests4 = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
var unableToAttend4 = "Ada Lovelace";
var newGuest4 = "Marie Curie";
var indexOfunableToAttend4 = dinnerGuests4.indexOf(unableToAttend4);
if (indexOfunableToAttend4 !== -1) {
    dinnerGuests4[indexOfunableToAttend4] = newGuest4;
}
dinnerGuests4.push("Leonardo da Vinci", "Jane Austen", "Martin Luther King Jr.");
console.log("Invitation Messages for the First Set of Guests:");
for (var _i = 0, dinnerGuests4_1 = dinnerGuests4; _i < dinnerGuests4_1.length; _i++) {
    var guest = dinnerGuests4_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend4, " can't make it to the dinner.\n"));
console.log("Invitation Messages for the Second Set of Guests:");
for (var _a = 0, dinnerGuests4_2 = dinnerGuests4; _a < dinnerGuests4_2.length; _a++) {
    var guest = dinnerGuests4_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
