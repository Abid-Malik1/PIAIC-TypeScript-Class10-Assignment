function showMagicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

const magicianNames1: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

makeGreat(magicianNames1);

showMagicians(magicianNames1);
