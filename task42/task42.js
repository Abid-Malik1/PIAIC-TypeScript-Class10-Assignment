function showMagicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
var magicianNames1 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
makeGreat(magicianNames1);
showMagicians(magicianNames1);
