// datum

theDate = new Date();
console.log(theDate);

console.log(theDate.getDay());      // Tag (0=Sonntag ... 6=Samstag)
console.log(theDate.getMonth());    // Monat (0=Januar ... 11=Dezember)
console.log(theDate.getYear());     // Jahr (aktuelles Jahr - 1900)
console.log(theDate.getTime());     // Anzahl ms seit 01.01.1970, 00:00:00 Uhr
console.log(theDate.getHours());    // Stunden
console.log(theDate.getMinutes());  // Minuten
console.log(theDate.getSeconds());  // Sekunden
console.log(theDate.getTimezoneOffset());   // Unterschied zu GMT in Minuten