// "use strict";
// strict mode

function myFunction() { 
    a = 100;        // Achtung: global
    console.log(a);
}

console.log(myFunction());  // Reference Error: a is not defined
                            // ohne "use strict" : Ausgabe 100 und undefined
