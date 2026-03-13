/*
Ejercicio 1: Voy a solicitarle al usuario sus datos: nombre, apellido y edad.

 Después de solicitarle los datos, lo que quiero es mostrar un mensaje de bienvenida mencionando estos datos.

Quiero lograr algo llamado case sensitive: No distinguir mayusculas de minusculas.

.toUpperCase() -> convierte todo a mayusculas
.toLowerCase() -> convierte todo a minusculas
*/

let nombre = prompt("Ingrese su nombre:").toUpperCase();
let apellido = prompt("Ingrese su apellido:").toUpperCase();
let edad = prompt("Ingrese su edad:");

let mensaje = `Bienvenido ${nombre} ${apellido}, tu edad es ${edad}`;

alert(mensaje);