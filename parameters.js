// parameters

// prüfen, ob einer Funktion Parameter übergeben wurde
function myFunc(p) {
    if(typeof p === "undefined") {
        console.log("Kein Parameter übergeben!");
    }
    else {
        console.log("Parameter übergeben!");
    }
}

// variable Anzahl an Parametern
function summe() {
    var sum = 0;
    for(var x in arguments) {
        sum += arguments[x];
    }
    return sum;
}

myFunc();       // Kein Parameter übergeben!
myFunc(1);      // Parameter übergeben!

console.log(summe(1,2,3,4,5,6,7));  // 28
   