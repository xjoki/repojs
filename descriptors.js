// Descriptors

let customer = { name: "Joe", id: 1234 };
let keys = Object.keys(customer);
console.log(keys);                      // Array(2) ["name", "id"]

Object.defineProperty(customer, "name", {enumerable: false});
keys = Object.keys(customer);
console.log(keys);                      // Array(1) ["id"]

// Auslesen eines Descriptors
console.log(Object.getOwnPropertyDescriptors(customer)); // Object {name: Object, id: Object}

// Einschränkung mit writable
Object.defineProperty(customer, "id", {writable: false});

customer.id = 2345;             // id wird nicht geändert, weil writable=false
console.log(customer.id);       // 1234