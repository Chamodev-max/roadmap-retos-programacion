/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

console.log("=== OPERADORES ===");

// Aritméticos
let a = 10;
let b = 3;
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);
console.log("Módulo:", a % b);
console.log("Exponente:", a ** b);

// Asignación
let x = 5;
x += 2;
console.log("Asignación +=:", x);

// Comparación
console.log("Mayor que:", a > b);
console.log("Menor o igual:", a <= b);
console.log("Igualdad (==):", a == "10");
console.log("Igualdad estricta (===):", a === "10");

// Lógicos
console.log("AND lógico:", true && false);
console.log("OR lógico:", true || false);
console.log("NOT lógico:", !false);

// Identidad
console.log("Igual estricto:", 5 === "5"); // false
console.log("No igual estricto:", 5 !== "5"); // true

// Pertenencia
let persona = { nombre: "Ana", edad: 25 };
console.log("'nombre' in persona:", "nombre" in persona); // true

let frutas = ["manzana", "banana", "uva"];
console.log("¿Incluye 'uva'?:", frutas.includes("uva")); // true

// Bits
let m = 5; // 0101
let n = 3; // 0011
console.log("AND a nivel de bits:", m & n); // 0001
console.log("OR a nivel de bits:", m | n);  // 0111
console.log("XOR a nivel de bits:", m ^ n); // 0110
console.log("Desplazamiento a la izquierda:", m << 1); // 1010 (10)
console.log("Desplazamiento a la derecha:", m >> 1); // 0010 (2)

console.log("\n=== ESTRUCTURAS DE CONTROL ===");

// Condicional if - else
let edad = 20;
if (edad < 18) {
    console.log("Eres menor de edad.");
} else if (edad >= 18 && edad < 60) {
    console.log("Eres adulto.");
} else {
    console.log("Eres adulto mayor.");
}

// Switch
let dia = "miércoles";
switch (dia) {
    case "lunes":
        console.log("Inicio de semana");
        break;
    case "miércoles":
        console.log("Mitad de semana");
        break;
    case "viernes":
        console.log("Fin de semana cercano");
        break;
    default:
        console.log("Día cualquiera");
}

// Bucle for
for (let i = 1; i <= 3; i++) {
    console.log("for loop:", i);
}

// Bucle while
let contador = 0;
while (contador < 3) {
    console.log("while loop:", contador);
    contador++;
}

// Bucle do...while
let j = 0;
do {
    console.log("do...while loop:", j);
    j++;
} while (j < 3);

// for...of (para recorrer arrays)
for (let fruta of frutas) {
    console.log("Fruta con for...of:", fruta);
}

// for...in (para recorrer propiedades de un objeto)
for (let key in persona) {
    console.log(`Clave: ${key}, Valor: ${persona[key]}`);
}

// Excepciones
try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) {
        throw new Error("División por cero no permitida");
    }
    console.log("Resultado:", resultado);
} catch (error) {
    console.log("Error capturado:", error.message);
} finally {
    console.log("Bloque finally siempre se ejecuta");
}

for (let i = 10; i < 56; i++){
 if (i % 2 === 0 && i != 16 && i % 3 !== 0){
    console.log(i)
}
}
