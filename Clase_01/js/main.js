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
let mensajeSuma = "La suma de " + numero1 + " y " + numero2 + " es: " + suma; // Crea un mensaje con el resultado de la suma
console.log(mensajeSuma); // Imprime el resultado de la suma

// confirm: vamos a ver el uso de confirm() para solicitar una confirmación al usuario

let respuesta = confirm("¿Deseas continuar?"); // Solicita al usuario una confirmación
if (respuesta) {
    console.log("El usuario desea continuar."); // Si el usuario confirma, se muestra este mensaje
} else {
    console.log("El usuario no desea continuar."); // Si el usuario cancela, se muestra este mensaje
}

// Valores falsy: vamos a ver los valores que se consideran falsy en JavaScript

// undefined: vamos a ver el uso de undefined para representar variables sin valor asignado

let variableSinValor; // Variable declarada pero sin valor asignado
console.log(variableSinValor); // Imprime undefined, ya que la variable no tiene un valor asignado

// null: vamos a ver el uso de null para representar la ausencia de valor

let variableNula = null; // Variable asignada con null para indicar que no tiene valor
console.log(variableNula); // Imprime null, indicando que la variable no tiene un valor asignado

// NaN: vamos a ver el uso de NaN para representar un valor numérico no válido

let resultadoInvalido = 0 / 0; // División de cero entre cero, lo que resulta en NaN
console.log(resultadoInvalido); // Imprime NaN, indicando que el resultado no es un número válido

// Infinity: vamos a ver el uso de Infinity para representar un valor numérico infinito

let resultadoInfinito = 1 / 0; // División de uno entre cero, lo que resulta en Infinity
console.log(resultadoInfinito); // Imprime Infinity, indicando que el resultado es un valor numérico infinito

// Operadores lógicos: vamos a ver el uso de operadores lógicos para combinar condiciones

// Igualdad: vamos a ver el uso de == y === para comparar valores

let x = 5;
let y = "5";

console.log(x == y); // true, porque == compara solo el valor (coerción de tipos)
console.log(x === y); // false, porque === compara el valor y el tipo (sin coerción de tipos)

// Desigualdad: vamos a ver el uso de != y !== para comparar valores

console.log(x != y); // false, porque != compara solo el valor (coerción de tipos)
console.log(x !== y); // true, porque !== compara el valor y el tipo (sin coerción de tipos)

// Operadores lógicos AND (&&) y OR (||)

let a1 = true;
let b1 = false;

console.log(a1 && b1); // false, porque ambos deben ser verdaderos para que el resultado sea verdadero
console.log(a1 || b1); // true, porque al menos uno debe ser verdadero para que el resultado sea verdadero

// Operadores de comparación: vamos a ver el uso de operadores de comparación para comparar valores

console.log(5 > 3); // true, porque 5 es mayor que 3
console.log(5 < 3); // false, porque 5 no es menor que 3
console.log(5 >= 5); // true, porque 5 es mayor o igual a 5
console.log(5 <= 4); // false, porque 5 no es menor o igual a 4