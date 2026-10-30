// Tehtava 1

console.log("I'm printing to console");

const nimi = prompt("Anna Nimesi: ");

console.log(`Hei, ${nimi}`);

document.querySelector("#target").innerHTML =
 "Hei, " + nimi + "!";


 // Tehtava 2


const luku1STR = prompt("Anna luku: ");
const luku2STR = prompt("Anna luku: ");
const luku3STR = prompt("Anna luku: ");

const luku1 = parseFloat(luku1STR);
const luku2 = parseFloat(luku2STR);
const luku3 = parseFloat(luku3STR);


let number = null;
number = luku1 + luku2 + luku3;
document.querySelector("#target2"). innerHTML =
    number


// tehtava 3


let vuosiluku = parseFloat(prompt("Syötä vuosiluku: "));
if ((vuosiluku % 4 === 0 && vuosiluku % 100 !== 0) || vuosiluku % 400 === 0) {
document.querySelector("#target3").innerHTML =
    "Antamasi vuosiluku " + vuosiluku + " on karkausvuosi";
} else {
    document.querySelector("#target3").innerHTML =
    "Antamasi vuosiluku " + vuosiluku + " ei ole karkausvuosi";
}


// tehtava 4


const neliojuuri = confirm("Lasketaanko neliöjuuri: ");

if (neliojuuri === false) {
    document.querySelector("#target4").innerHTML =
    "Neliöjuurta ei lasketa"

} else {
    const nelio = parseFloat(prompt("Syötäluku josta neliöjuuri lasketaan: "));

    if (nelio < 0) {
        document.querySelector("#target4").innerHTML =
        "Negatiivisesta luvusta ei voi laskea neliöjuurta"
    }   else    {
        const tulos = Math.sqrt(nelio);
        document.querySelector("#target4").innerHTML =
            tulos

    }   
}

// tehtava 5

const arpakuutio = parseInt(prompt("Syötä luku kuinka monta kertaa arpakuutiota heitetään: "));

let silmaluvut = "";

for (let i = 0; i < arpakuutio; i++) {
    const heitto = Math.floor(Math.random() * 6) + 1;
    silmaluvut = silmaluvut + heitto + " ";

}

document.querySelector("#target5").innerHTML =
    silmaluvut

