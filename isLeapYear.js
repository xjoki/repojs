// isLeapYear
// Prüfung, ob ein Jahr ein Schaltjahr ist

function isLeapYear(year) {
    if
    ( (year % 400 == 0) ? (1) : 
        ((year % 100 == 0) ? (0) :
        ((year % 4 == 0)) ? (1) : (0))
    ) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isLeapYear(1999));      // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(4200));      // false