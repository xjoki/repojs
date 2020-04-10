// Scope
var x = 0;

function myFunction() { 
    var a = 100;    // siehe Immediatley-Invoked Function Expression (IIFE) Pattern
}

if(x == 0) {
    var b = 200;
}

console.log(b);     // Achtung!