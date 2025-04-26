// you can write js here

console.log('exo-5');

let input = prompt();
let vowels = ["a", "e", "i", "o", "u", "y"];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
    let lettre = input[i];
    console.log(lettre);
    if (vowels.indexOf(lettre.toLowerCase()) !== -1) {
        resultArray.push(lettre);
    }
        let traduction = resultArray.join('').toUpperCase();
console.log(traduction);
}
