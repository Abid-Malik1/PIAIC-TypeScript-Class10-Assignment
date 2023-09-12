var letdinnerGuests2 = [
    "Albert Einstein",
    "Ada Lovelace",
    "Nelson Mandela",
];
var unableToAttend1 = "Ada Lovelace";
var newGuest1 = "Marie Curie";
var indexOfunableToAttend1 = letdinnerGuests2.indexOf(unableToAttend1);
if (indexOfunableToAttend1 !== -1) {
    letdinnerGuests2[indexOfunableToAttend1] = newGuest1;
}
for (var _i = 0, letdinnerGuests2_1 = letdinnerGuests2; _i < letdinnerGuests2_1.length; _i++) {
    var guest = letdinnerGuests2_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend1, " can't make it to the dinner."));
