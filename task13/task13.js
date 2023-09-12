var dinnerGuests1 = ["Albert Einstein", "Ada Lovelace", "Nelson Mandela"];
var unableToAttend = "Ada Lovelace";
var newGuest = "Marie Curie";
var indexOfUnableToAttend = dinnerGuests1.indexOf(unableToAttend);
if (indexOfUnableToAttend !== -1) {
    dinnerGuests1[indexOfUnableToAttend] = newGuest;
}
// Print updated invitation messages
for (var _i = 0, dinnerGuests1_1 = dinnerGuests1; _i < dinnerGuests1_1.length; _i++) {
    var guest = dinnerGuests1_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
