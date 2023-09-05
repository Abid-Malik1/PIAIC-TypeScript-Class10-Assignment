var myName = "HI My Name is Abid Malik";
console.log("toLowerCase:", myName.toLowerCase());
console.log("toUpperCase:", myName.toUpperCase());
//titlecase
function toTitleCase(input) {
    return input.toLowerCase().replace(/(^|\s)\S/g, function (match) { return match.toUpperCase(); });
}
var titleCaseName = toTitleCase(myName);
console.log("titlecase:", titleCaseName);
