// preventExtensions

let a = { 
    greeting: 'Hallo'
}

a.Zahl = 100;

// Erweiterungen an Objekt a verhindern
Object.preventExtensions(a);

a.Zahl2 = 200;

console.log(a);
console.log(Object.isExtensible(a));    // false

// Objekt versiegeln mit Object.seal()      Object.isSealed()
// Objekt einfrieren mit Object.freeze()    Object.isFrozen()

