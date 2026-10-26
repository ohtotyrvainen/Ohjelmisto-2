console.log("I'm printing to console");

const nimi = prompt("Anna Nimesi: ");

console.log(`Hei, ${nimi}`);

document.querySelector("#target").innerHTML =
 "Hei, " + nimi + "!";

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