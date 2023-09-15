var usernames1 = [];
if (usernames1.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, usernames1_1 = usernames1; _i < usernames1_1.length; _i++) {
        var username = usernames1_1[_i];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
