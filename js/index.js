


/* clase 3: CREAR UN ALGORITMO UTILIZANDO UN CICLO
Tomando como base los ejemplos anteriores de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones. En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
*/ 
window.alert("Bienvenido Profesor/a!");

let nombre = prompt("Por favor ingrese el nombre del alumno")
let Calificaciones = parseInt(prompt("Ingrese cuantas notas desea promediar"))
let totalcalificacion = 0;
let promedio = 0;

for (let i = 1; i <= Calificaciones; i++){
    let calificacion = parseFloat(prompt("Ingresa calificación N°" + i));
    totalcalificacion = totalcalificacion + calificacion;
}

promedio = totalcalificacion / Calificaciones;


alert (`El promedio del alumno ${nombre} es: ${promedio}`)
