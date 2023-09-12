var dinnerGuests3 = [
    "Albert Einstein",
    "Ada Lovelace",
    "Nelson Mandela",
];
var unableToAttend2 = "Ada Lovelace";
var newGuest2 = "Marie Curie";
var indexOfunableToAttend2 = dinnerGuests3.indexOf(unableToAttend2);
if (indexOfunableToAttend2 !== -1) {
    dinnerGuests3[indexOfunableToAttend2] = newGuest2;
}
for (var _i = 0, dinnerGuests3_1 = dinnerGuests3; _i < dinnerGuests3_1.length; _i++) {
    var guest = dinnerGuests3_1[_i];
    console.log("Dear ".concat(guest, ",\nYou are cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]"));
}
console.log("Unfortunately, ".concat(unableToAttend2, " can't make it to the dinner."));
