// object

var obj = {};

// herausfinden, ob ein Objekt von einem bestimmten Typ ist: instanceof
console.log(obj instanceof Object); // true
console.log(typeof obj);            // object
// Typen werden mittels Funktion definiert!
console.log(typeof Object);         // function
console.log(obj.toString());        // [object Object]