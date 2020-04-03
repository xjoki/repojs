// Typ undefined

if(typeof zu_pruefende_Var === "undefined") {
    console.log("Undefiniert!")
}

if(typeof zu_pruefende_Var) {   // Achtung: "undefined" wird zu false!
    console.log("Undefiniert?!")
}

var b = typeof zu_pruefende_Var !== "undefined";
if(!b) {                        // deshalb not (!)
    console.log("Undefiniert!")
}
