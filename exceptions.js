// Exceptions / Ausnahmen

try {
    throw new Error("Fehler");
}
catch(e) {      // In JavaScript gibt es nur einen einzigen catch-Block !!!
    console.log("Catch Error: " + e);
}
finally {
    console.log("Dieser Code wird immer verarbeitet.");
}