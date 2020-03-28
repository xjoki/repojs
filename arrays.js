// Arrays

var array = ["a", "b", "c"];
var elem = array[1];    // nullbasiert , "b"
array[1] = 100;         // "a", 100, "c"
array.push("Hallo");    // "a", 100, "c", "Hallo"
// Einfügen oder Entfernen von Elementen mit splice
array.splice(1,0,"z");  // "a", "z", 100, "c", "Hallo"
array.splice(1,2);      // "a", "c", "Hallo" 
// Typ ermitteln mit typeof