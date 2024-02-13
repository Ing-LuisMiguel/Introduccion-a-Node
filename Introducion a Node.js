# Introducción a Node.js

## ¿Qué es Node.js?
Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores utilizar JavaScript para escribir código que se ejecuta en el servidor en lugar de en el navegador.

## Uso de Javascript necesario para usar Node.js:

### Lexical Structure:
La estructura léxica se refiere a la sintaxis y la estructura básica del código JavaScript. Comprenderla es fundamental para escribir código JavaScript válido.
``javascript
let a = 10;
const b = 5;


Expressions:
Las expresiones son unidades de código que producen un valor. Pueden ser simples o complejas.
let resultado = (a * b) + 2;


Data Types:
JavaScript tiene varios tipos de datos, como números, cadenas, booleanos, objetos y funciones.
let numero = 42;
let texto = "Hola";
let esVerdadero = true;
let persona = { nombre: "Ana", edad: 25 };


Classes:
La sintaxis de clases en ES6 permite una programación orientada a objetos más clara.
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("Haciendo sonido");
  }
}
const perro = new Animal("Fido");
perro.hacerSonido();


Variables:
Las variables se utilizan para almacenar valores en JavaScript.
var x = 15;
let y = 30;


Functions:
Las funciones son bloques de código reutilizables que realizan una tarea específica.
function multiplicar(a, b) {
    return a * b;
}
const dividir = (a, b) => a / b;


this operator:
El operador this se refiere al objeto en el contexto actual de ejecución.
const objeto = {
  propiedad: "valor",
  mostrarPropiedad() {
    console.log(this.propiedad);
  }
};
objeto.mostrarPropiedad();


Arrow Functions:
Funciones de flecha proporcionan una sintaxis más corta y un comportamiento diferente con respecto a this.
const cuadrado = (num) => num * num;
console.log(cuadrado(4));

Loops:
Los bucles se utilizan para repetir una serie de instrucciones.
for (let i = 0; i < 3; i++) {
    console.log(i);
}
let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}


Scopes:
El alcance de una variable se refiere a la parte del código donde esa variable es accesible.
function ejemploScopes() {
    var interno = "variable interna";
    console.log(interno);
}
ejemploScopes();


Arrays:
Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
const frutas = ["manzana", "banana", "uva"];
console.log(frutas.length);
console.log(frutas[0]);


Template Literals:
Las template literals permiten la interpolación de variables dentro de cadenas de texto de manera más legible.
const nombre = "Carlos";
console.log(`Hola, mi nombre es ${nombre}`);


Strict Mode:
El modo estricto es una característica que permite optar por una versión más restringida y segura del lenguaje.
"use strict";

markdown


# Introducción a Node.js


## ¿Qué es Node.js?
Node.js es un entorno de ejecución de JavaScript del lado del servidor que permite a los desarrolladores utilizar JavaScript para escribir código que se ejecuta en el servidor en lugar de en el navegador.
## Uso de Javascript necesario para usar Node.js:
### Lexical Structure:
La estructura léxica se refiere a la sintaxis y la estructura básica del código JavaScript. Comprenderla es fundamental para escribir código JavaScript válido.
``javascript
let a = 10;
const b = 5;



Expressions:
Las expresiones son unidades de código que producen un valor. Pueden ser simples o complejas.
let resultado = (a * b) + 2;
Data Types:
JavaScript tiene varios tipos de datos, como números, cadenas, booleanos, objetos y funciones.
let numero = 42;
let texto = "Hola";
let esVerdadero = true;
let persona = { nombre: "Ana", edad: 25 };



Classes:
La sintaxis de clases en ES6 permite una programación orientada a objetos más clara.
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  hacerSonido() {
    console.log("Haciendo sonido");
  }
}
const perro = new Animal("Fido");
perro.hacerSonido();


Variables:
Las variables se utilizan para almacenar valores en JavaScript.
var x = 15;
let y = 30;


Functions:
Las funciones son bloques de código reutilizables que realizan una tarea específica.

function multiplicar(a, b) {
    return a * b;
}
const dividir = (a, b) => a / b;
this operator:
El operador this se refiere al objeto en el contexto actual de ejecución.



const objeto = {
  propiedad: "valor",
  mostrarPropiedad() {
    console.log(this.propiedad);
  }
};
objeto.mostrarPropiedad();


Arrow Functions:
Funciones de flecha proporcionan una sintaxis más corta y un comportamiento diferente con respecto a this.
const cuadrado = (num) => num * num;
console.log(cuadrado(4));


Loops:
Los bucles se utilizan para repetir una serie de instrucciones.

for (let i = 0; i < 3; i++) {
    console.log(i);
}

let j = 0;
while (j < 3) {
    console.log(j);
    j++;
}


Scopes:
El alcance de una variable se refiere a la parte del código donde esa variable es accesible.
function ejemploScopes() {
    var interno = "variable interna";
    console.log(interno);
}
ejemploScopes();


Arrays:
Los arrays son estructuras de datos que permiten almacenar múltiples valores en una sola variable.
const frutas = ["manzana", "banana", "uva"];
console.log(frutas.length);
console.log(frutas[0]);


Template Literals:
Las template literals permiten la interpolación de variables dentro de cadenas de texto de manera más legible.
const nombre = "Carlos";
console.log(`Hola, mi nombre es ${nombre}`);
Strict Mode:
El modo estricto es una característica que permite optar por una versión más restringida y segura del lenguaje.
"use strict";


ECMAScript 2015 (ES6) and beyond:
ES6 introdujo muchas nuevas características y mejoras en JavaScript.
class Vehiculo {
    constructor(modelo) {
        this.modelo = modelo;
    }
    acelerar() {
        console.log(`${this.modelo} acelerando...`);
    }
}
const coche = new Vehiculo("Toyota");
coche.acelerar();



