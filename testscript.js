// testscript.js
var txt = document.querySelector('article').innerHTML;
// Ausgaben in Hinweisfenstern
alert(txt);
alert("Laenge des Textes: " + txt.length);

// direkt in das Dokument schreiben
if(txt.length > 0)
    document.write("Textlänge: <b>" + txt.length + "</b>");
else
    document.write("Kein entsprechender Text vorhanden.")
