// #7DaysOfCodeChallenge - Día 3

const area = prompt("Elige un área para seguir aprendiendo: 'Front-end' o 'Back-end'").trim();

let lenguaje = "";

if (area === "Front-end") {
    lenguaje = prompt("¿Quieres seguir aprendiendo React o Vue?").trim();
} else if (area === "Back-end") {
    lenguaje = prompt("¿Quieres seguir aprendiendo C#, Java o Python?").trim();
} else {
    alert("No elegiste un área válida");
}

if (lenguaje) {
    const especialidadOFullstack = prompt("Escribe 1 para seguir especializándote en el área elegida o 2 para ser Fullstack").trim();

    if (especialidadOFullstack === "1") {
        alert(`Tu elección fue ${area} en ${lenguaje}`);
    } else if (especialidadOFullstack === "2") {
        alert(`Es hora de comenzar a aprender otros lenguajes y tecnologías además de ${lenguaje} si quieres ser Fullstack`);
    } else {
        alert("No elegiste una opción válida");
    }

    let mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'si' en caso de positivo o 'no' en caso de negativo.").trim();
    
    while (mensaje.toLowerCase() === "si") {
        let nuevaTecnologia = prompt("Escribe la tecnología que te gustaría aprender").trim();
        alert(`${nuevaTecnologia} es realmente una tecnología muy interesante, espero que la disfrutes.`);
        mensaje = prompt("¿Hay alguna otra tecnología que te gustaría aprender? Escribe 'si' en caso de positivo.").trim();
    }
    
    if (mensaje.toLowerCase() === "no") {
        alert(`Espero que disfrutes mucho aprendiendo ${lenguaje}`);
    } else {
        alert("Muchas gracias por participar");
    }
}

