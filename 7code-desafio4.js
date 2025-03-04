/* Número adivinador fijo */

let numeroAdivinar = 7;
let intentos = "";
let acierto = false;

for (let contador = 0; contador < 3; contador++){
    intentos = prompt("Intenta adivinar el número fijo del 0 al 10");
    if (intentos == numeroAdivinar){
        alert(`¡Felicidades! Adivinaste el número, el número era ${numeroAdivinar}`);
        acierto = true;
        break;
    }
    alert("Intenta de nuevo");
}
if(!acierto){
    alert(`Lo siento, no acertaste. ¡El número era ${numeroAdivinar}!`);
}

/* Número adivinador aleatorio */

let numeroAdivinador = Math.floor(Math.random() * (10 - 0 + 1)) + 0;
let intento = "";
let acierta = false;

for (let contador = 0; contador < 3; contador++){
    intento = prompt("Intenta adivinar el número fijo del 0 al 10");
    if (intento == numeroAdivinador){
        alert(`¡Felicidades! Adivinaste el número, el número era ${numeroAdivinador}`);
        acierta = true;
        break;
    }
    alert("Intenta de nuevo");
}
if(!acierta){
    alert(`Lo siento, no acertaste. ¡El número era ${numeroAdivinador}!`);
}