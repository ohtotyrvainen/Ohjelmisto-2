// Tehtava 1

const luvut = [];

for(let i = 0; i < 5; i++) {
    const luku = parseFloat(prompt('Anna luku ${i + 1}/5:'))
    luvut.push(luku);
}

console.log("Luvut käänteisesessä järjestyksessä");

for (let i = luvut.length - 1; i >= 0; i--) {
    console.log(luvut[i]);
}