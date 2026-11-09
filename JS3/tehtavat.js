// Tehtava 1

const luvut = [];

for(let i = 0; i < 5; i++) {
    const luku = parseFloat(prompt('Anna luku '))
    luvut.push(luku);
}

console.log("Luvut käänteisesessä järjestyksessä");

let tulos = "";

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i]);
    tulos += luvut[i];
}

document.querySelector("#target").innerHTML = tulos;

// Tehtävä 2

const numbers = [];

let number = parseFloat(prompt("Anna luku numero 0 lopettaa: "));

while (number !== 0) {
   numbers.push(number);    
   number = parseFloat(prompt("Anna luku numero 0 lopettaa: "));
}

numbers.sort((a, b) => b - a);

for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
// Tehtävä 3

const nimet = []

for (let i = 0; i < 6; i++) {
    nimet.push(prompt(`Syötä koiran ${i + 1} nimi`))
}

for (let i = 0; i < nimet.length; i++) {
    console.log(`Nimi: ${nimet[i]}`)
}

