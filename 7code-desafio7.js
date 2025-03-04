function suma(valor1, valor2){
    return Number(valor1) + Number(valor2);
}

function resta(valor1, valor2){
    return Number(valor1) - Number(valor2);
}

function multiplicacion(valor1, valor2){
    return Number(valor1) * Number(valor2);
}

function division(valor1, valor2){
    return Number(valor1) / Number(valor2);
}

let valor1;
let valor2;
let operacion;

do { //do while para que se ejecute al menos una vez
    operacion = prompt("¿Qué operación deseas realizar? suma, resta, multiplicación,división o salir");
    while (operacion != "suma" && operacion != "resta" && operacion != "multiplicacion" && operacion != "division" && operacion != "salir"){ //Mientras el texto leído sea diferente de "suma", "resta", "multiplicación", "división" y "salir", mostrar que no fue reconocido y preguntar nuevamente.
        alert("Operación no reconocida");
        operacion = prompt("¿Qué operación quieres realizar? 'suma', 'resta', 'multiplicación', 'división' 'salir'.");
        }
        if (operacion === "salir"){ //si la respuesta es "salir", salir del ciclo
            break;
    }

    valor1 = prompt("Ingresa el primer valor");
    valor2 = prompt("Ingresa el segundo valor");
    switch (operacion){
        case "suma":
            alert(`El resultado de la suma es ${suma(valor1, valor2)}`);
            break;
        case "resta":
            alert(`El resultado de la resta es ${resta(valor1, valor2)}`);
            break;
        case "multiplicacion":
            alert(`El resultado de la multiplicación es ${multiplicacion(valor1, valor2)}`);
            break;
        case "division":
            alert(`El resultado de la división es ${division(valor1, valor2)}`);
            break;
    }
} while (operacion != "suma" || operacion != "resta" || operacion != "multiplicacion" || operacion != "division")
    alert("¡Hasta luego!");