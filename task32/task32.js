var currentUsers = ["John", "Alice", "Bob", "Eve", "Charlie"];
var newUsers = ["alice", "David", "frank", "John", "Grace"];
function isUsernameTaken(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var newUser = newUsers_1[_i];
    if (isUsernameTaken(newUser)) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose a different one."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
}
