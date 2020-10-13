// Arrays / Datenfelder

var ar = ["a", "b", "c"];
var elem = ar[1];       // nullbasiert , "b"
ar[1] = 100;            // "a", 100, "c"
// unterschiedliche Typen sind möglich
ar.push("Hallo");       // "a", 100, "c", "Hallo"
// Einfügen oder Entfernen von Elementen mit splice
ar.splice(1,0,"z");     // "a", "z", 100, "c", "Hallo"
ar.splice(1,2);         // "a", "c", "Hallo" 
// Typ ermitteln mit typeof
console.log(typeof ar)

// Im Fall von Arrays kann das new auch weggelassen werden
let myArray1 = new Array();
let myArray2 = new Array(100);
let myArray3 = new Array(1,2,3);
let myArray4 = Array();

// Array-Literal-Schreibweise
let names = ['Peter' , 'Paul', 'Mary'];
let emptyArray = [];    // leeres Array

