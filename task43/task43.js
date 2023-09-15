function showMagicians3(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
function makeGreat3(magicians) {
    var greatMagicians = [];
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        greatMagicians.push("the Great ".concat(magician));
    }
    return greatMagicians;
}
var magicianNames3 = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
var greatMagicians = makeGreat3(magicianNames3);
console.log("Original Magicians:");
showMagicians3(magicianNames3);
console.log("\nGreat Magicians:");
showMagicians3(greatMagicians);
