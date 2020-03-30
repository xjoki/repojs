// Vergleichsoperatoren

var z1 = 100, z2 = 100, z3 = 150, z4 = "100";

// == Vergleichsoperator (equal operator)
var v1 = z1 == z2;      // true      
var v2 = z1 == z3;      // false

// == verwendet ggf. noch Konvertierungen
var v3 = z1 == z4;      // true

// === strict equal operator, auch !==
v1 = z1 === z2;         // true
v2 = z1 === z3;         // false
v3 = z1 === z4;         // false
