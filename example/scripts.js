"use strict";
console.log ("Hei maailma!")

document.querySelector("#target").innerHTML = "Testi!";
 
const cabinClass = prompt("Enter your cabin class A/B/C:");

switch (cabinClass) {
    case "A":
        console.log("Porvari luokka valittuna, olet A.");
        break;
    case "B":
        console.log("Keskiluokka valittuna, Aika mid");
        break;
    case "C":
        console.log("Alin luokka valittu");
        break;
    default:
        console.log("Valintaa ei ole");
        break;

}

console.log("Ohjelma loppu")

// let numero = 5;
// numero++;
// numero++;
// console.log(numero);
// numero--;
// console.log(numero);

// Math.random();

