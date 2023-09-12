var letdinnerGuests3 = ["Albert Einstein", "Marie Curie", "Nelson Mandela"];
var unableToAttend3 = "Ada Lovelace";
var newGuest3 = "Marie Curie";
var indexOfunableToAttend3 = letdinnerGuests3.indexOf(unableToAttend3);
if (indexOfunableToAttend3 !== -1) {
    letdinnerGuests3[indexOfunableToAttend3] = newGuest3;
}
for (var _i = 0, letdinnerGuests3_1 = letdinnerGuests3; _i < letdinnerGuests3_1.length; _i++) {
    var guest = letdinnerGuests3_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend3, " can't make it to the dinner.\n"));
for (var _a = 0, letdinnerGuests3_2 = letdinnerGuests3; _a < letdinnerGuests3_2.length; _a++) {
    var guest = letdinnerGuests3_2[_a];
    console.log("Dear ".concat(guest, ",\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
