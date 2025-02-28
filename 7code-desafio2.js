// #7DaysOfCodeChallenge - Día 2

let nombre = prompt("¿Cuál es tu nombre?");
let edad = prompt("¿Cuántos años tienes?");
let lenguaje = prompt("¿Qué lenguaje de programación estás estudiando?");
let mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;

alert(mensaje);

let gusta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con el número 1 - SÍ o 2 - NO`);
if (gusta == 1){
    alert("¡Muy bien! Sigue estudiando y tendrás mucho éxito.");
}
if (gusta == 2){
    alert("Oh, qué pena... ¿Has intentado aprender otros lenguajes?");
}