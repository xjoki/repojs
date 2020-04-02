// Variablen
a = 50;
var b;                      // undefined
var zahl = 100;
var txt = "Text";
var zahl2 = 100, zahl3;     // zahl3 ist undefiniert
console.log(zahl3);         // undefined
var o = {e1:10, e2:20, e3:50};
console.log(o);             // Object {e1: 10, e2: 20, e3: 50}

// Variablentypen können sich während der Laufzeit jederzeit ändern
zahl = "Aus Zahl wird Text";    // String
zahl = [1,2,3];                 // Array

var a = null;
console.log(typeof null);       // object