// Arrays / Datenfelder

var ar = ["a", "b", "c"];
var elem = ar[1];       // nullbasiert , "b"
ar[1] = 100;            // "a", 100, "c"
ar.push("Hallo");       // "a", 100, "c", "Hallo"
// Einfügen oder Entfernen von Elementen mit splice
ar.splice(1,0,"z");     // "a", "z", 100, "c", "Hallo"
ar.splice(1,2);         // "a", "c", "Hallo" 
// Typ ermitteln mit typeof
console.log(typeof ar)

var myArray = new Array(100);