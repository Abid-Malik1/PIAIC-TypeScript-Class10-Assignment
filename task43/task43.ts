function showMagicians3(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat3(magicians: string[]): string[] {
    const greatMagicians: string[] = [];

    for (let magician of magicians) {
        greatMagicians.push(`the Great ${magician}`);
    }

    return greatMagicians;
}

const magicianNames3: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

const greatMagicians = makeGreat3(magicianNames3);

console.log("Original Magicians:");
showMagicians3(magicianNames3);

console.log("\nGreat Magicians:");
showMagicians3(greatMagicians);
