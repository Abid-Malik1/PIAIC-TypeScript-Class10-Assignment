let currentUsers: string[] = ["John", "Alice", "Bob", "Eve", "Charlie"];

let newUsers: string[] = ["alice", "David", "frank", "John", "Grace"];

function isUsernameTaken(username: string): boolean {
    return currentUsers.some(user => user.toLowerCase() === username.toLowerCase());
}

for (let newUser of newUsers) {
    if (isUsernameTaken(newUser)) {
        console.log(`Sorry, the username '${newUser}' is already taken. Please choose a different one.`);
    } else {
        console.log(`Congratulations! The username '${newUser}' is available.`);
    }
}
