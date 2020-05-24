// builtin.js

var txt = "Dies ist eine Zeichenkette.";
var esc_txt = escape(txt);
console.log(esc_txt);           // "Dies%20ist%20eine%20Zeichenkette."
console.log(unescape(esc_txt)); // "Dies ist eine Zeichenkette."

var ctxt = "3+4";
console.log(eval(ctxt));        // 7   eval : bad practice

var ntxt1 = "34.3";
var ntxt2 = "abc";
console.log(Number(ntxt1));     // 34.3
console.log(Number(ntxt2));     // NaN (Not a Number)

console.log(parseInt(ntxt1));   // 34
console.log(parseFloat(ntxt1)); // 34.3

var date = new Date();
var str_Date = String(date);
console.log(str_Date);
console.log(typeof str_Date);   // string
console.log(typeof date);       // object