let dinnerGuests81: string[] = [
  "Albert Einstein",
  "Marie Curie",
  "Nelson Mandela",
  "Charles Darwin",
  "Galileo Galilei",
];
let unableToAttend8 = "Ada Lovelace"; 
let newGuest8 = "Marie Curie"; 
let additionalGuest21 = "Isaac Newton"; 
let guestToAddToMiddle1 = "Charles Darwin"; 
let guestToAppendToEnd1 = "Galileo Galilei"; 

let indexOfunableToAttend8 = dinnerGuests81.indexOf(unableToAttend8);
if (indexOfunableToAttend8 !== -1) {
  dinnerGuests81[indexOfunableToAttend8] = newGuest8;
}

dinnerGuests81.unshift(additionalGuest21); 


let middleIndex1 = Math.floor(dinnerGuests81.length / 2);
dinnerGuests81.splice(middleIndex1, 0, guestToAddToMiddle1);


dinnerGuests81.push(guestToAppendToEnd1);

console.log("I can only invite two people for dinner.");


while (dinnerGuests81.length > 2) {
  let removedGuest = dinnerGuests81.pop();
  console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}


console.log(
  `Dear ${dinnerGuests81[0]},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
);
console.log(
  `Dear ${dinnerGuests81[1]},\nYou are still cordially invited to join me for dinner. It would be an honor to have you as my guest.\nSincerely, [Abid Malik]`
);

dinnerGuests81.pop();
dinnerGuests81.pop();


console.log("Guest list is now empty:", dinnerGuests81);
