let myName: string = "HI My Name is Abid Malik";

console.log("toLowerCase:", myName.toLowerCase()); //Output: hi my name is abid malik
console.log("toUpperCase:", myName.toUpperCase()); //Output: HI MY NAME IS ABID MALIK

//titlecase

function toTitleCase(input: string): string {
  return input
    .toLowerCase()
    .replace(/(^|\s)\S/g, (match) => match.toUpperCase());
}

let titleCaseName = toTitleCase(myName);
console.log("titlecase:", titleCaseName); //Output: Hi My Name Is Abid Malik
