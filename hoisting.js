//  Hoisting

console.log("x hat den Wert " + x);     // "undefined"
console.log("y hat den Wert " + y);     // Cannot access 'y' before initialization
console.log("pi hat den Wert " + pi);   // Cannot access 'pi' before initialization

var x = 100;
let y = 100;                            // Kein Hoisting
const pi = 3.14;                        // Kein Hoisting