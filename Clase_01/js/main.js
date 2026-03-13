// Comentarios en linea

/*
Comentarios multilinea
*/

// Consola: vamos a ver el uso de console.log() y tipos de datos

console.log(43); // number: datos de tipo numérico
console.log("Esto es un string"); // string: datos de tipo cadena de texto
console.log(true); // boolean: datos de tipo lógico (verdadero o falso)
console.log(false); // boolean: datos de tipo lógico (verdadero o falso)

// Variables: vamos a ver el uso de variables para almacenar datos
// let o const (existe también var pero no se recomienda su uso por problemas de alcance)

let nombre = "Christian"; // variable de tipo string
const edad = 43; // variable de tipo number (constante, no se puede cambiar su valor)
let esEstudiante = true; // variable de tipo boolean

console.log(nombre); // Imprime el valor de la variable nombre
console.log(edad); // Imprime el valor de la variable edad
console.log(esEstudiante); // Imprime el valor de la variable esEstudiante

const PI = 3.1416; // Constante para el valor de pi que no se puede reasignar
console.log(PI); // Imprime el valor de la constante PI

// Operadores: vamos a ver el uso de operadores aritméticos y de asignación

console.log(5 + 3); // Suma: 8
console.log(10 - 4); // Resta: 6
console.log(7 * 2); // Multiplicación: 14
console.log(20 / 5); // División: 4
console.log(10 % 3); // Módulo: 1 (resto de la división)

let a = 5;
let b = 3;

console.log(a + b); // Suma: 8
console.log(a - b); // Resta: 2
console.log(a * b); // Multiplicación: 15
console.log(a / b); // División: 1.6666666666666667
console.log(a % b); // Módulo: 2 (resto de la división)

//alert: vamos a ver el uso de alert() para mostrar mensajes al usuario

alert("¡Hola, bienvenido al curso de JavaScript!"); // Muestra un mensaje de alerta al usuario

// prompt: vamos a ver el uso de prompt() para solicitar datos al usuario

let nombreUsuario = prompt("¿Cuál es tu nombre?"); // Solicita al usuario que ingrese su nombre
console.log("Hola, " + nombreUsuario + "!"); // Imprime un saludo personalizado con el nombre del usuario

// Solicita al usuario que ingrese dos números y los suma
let numero1 = parseFloat(prompt("Ingresa el primer número:")); // Solicita el primer número y lo convierte a float
let numero2 = parseFloat(prompt("Ingresa el segundo número:")); // Solicita el segundo número y lo convierte a float

let suma = numero1 + numero2; // Suma los dos números
console.log("La suma de " + numero1 + " y " + numero2 + " es: " + suma); // Imprime el resultado de la suma