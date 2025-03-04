let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = [];
let categoria = "";


/**
 * Valor inicial de la variable agregarMas como "si" porque siempre va a entrar en un while
 */
let agregarMas = "si";

while(agregarMas !="no"){
    agregarMas = prompt("¿Deseas agregar mas productos a la lista de compras? Responde 'si' o 'no'.");
while (agregarMas != "si" && agregarMas != "no"){
     //mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
    alert("Por favor, responde 'si' o 'no'.");
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Response 'si' o 'no'.")
}
if (agregarMas === "no"){ //si la respuesta es "no", salir del ciclo
    break;
}

comida = prompt("¿Qué comida deseas agregar?");
categoria = prompt("¿A qué categoría pertenece la comida? frutas, lacteos, dulces o congelados");
if (categoria === 'frutas'){
    frutas.push(comida);
} else if (categoria === 'lacteos'){
    lacteos.push(comida);
} else if (categoria === 'dulces'){
    dulces.push(comida);
} else if (categoria === 'congelados'){
    congelados.push(comida);
} else {
    alert("La categoría ingresada no es válida");
}
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Lácteos: ${lacteos}\n Dulces: ${dulces}\n Congelados: ${congelados}`);