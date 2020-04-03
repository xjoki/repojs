// functions

var beispiel_variable = 0;          // <-
var beispiel_variable2 = 100;       //  |
                                    //  | außerhalb bereits definiert
function bsp(a) {                   //  |
    beispiel_variable = a;          // <-
    var beispiel_variable2 = 3;     // <- nur innerhalb der Funktion bsp() !
}

function avg(sum, num) {
    return sum / num;
}

bsp(2);
console.log(beispiel_variable);
console.log(beispiel_variable2);
console.log(avg(1050,54).toFixed(2));

// Anonyme Funktion an Variable
var myAnFunc = function(a) {
    return a * a;
};  // <-- Semikolon !
console.log(myAnFunc(5));   // 25