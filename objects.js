// objects

// ! Konstruktorfunktion könnte in Klassendeklaration konvertiert werden
function Customer(name, id) {       
    this.name = name;
    this.id = id;
}

Customer.prototype.getName = function() {
    return this.name;
}
Customer.prototype.getId = function() {
    return this.id;
}

let myCustomer = new Customer("Mustermann", 1234);
console.log(myCustomer);                            // Customer {name: "Mustermann", id: 1234}
let myObj = Object.getPrototypeOf(Customer);        // function() { ... }


myObj = Object.getPrototypeOf(myCustomer);
console.log(myObj);                                 // Object {getName: , getId: , constructor: }      
console.log(myObj === Customer.prototype);          // true
console.log("Name: " + myCustomer.getName());       // Name: Mustermann
console.log("Id: " + myCustomer.getId());           // Id: 1234