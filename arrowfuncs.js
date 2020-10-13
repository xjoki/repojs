// Arrow Functions
// (Parameter) => {Function Body}
// ES2015

let summe_1 = function(x, y) {
    return x + y;
}

let summe_2 = (x,y) => {return x + y;}

let summe_3 = (x,y) => x + y;

let displayMessage = msg => console.log(msg);
let displayMessage_Hallo = () => console.log("Hallo");

let createUser = (username, email, pw) =>
(
    {
        username: username,
        email: email,
        pw: pw
    }
);