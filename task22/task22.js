var numbers = [1, 2, 3, 4, 5];
var index = 10;
try {
    var value = numbers[index];
    console.log("Value at index ".concat(index, ": ").concat(value));
}
catch (error) {
    console.error("Caught an index error:", error);
}
if (index >= 0 && index < numbers.length) {
    var value = numbers[index];
    console.log("Value at index ".concat(index, ": ").concat(value));
}
else {
    console.error("Index ".concat(index, " is out of bounds."));
}
