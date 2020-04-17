// prototype_prop

var obj = {};

// jede Funktion besitzt automatisch die Property prototype

console.log(typeof Object.prototype);           // object
console.log(typeof Object.prototype.toString);  // function
console.log(typeof obj.prototype);              // undefined

console.log(typeof Object.getPrototypeOf(obj)); // object
