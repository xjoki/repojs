'use strict'

// Konstruktoren
// ctor

function Item(name, price, author, isbn) {
    this.name = name;
    this.price = price;
    this.author = author;
    this.isbn = isbn;
    this.PrintItem = function() {
        console.log(this.author + ': ' + this.price)
    }
}

// Methode constructor() wird implizit aufgerufen, wenn eine neue
// Objektinstanz erzeugt wird.
class CItem {
    constructor(name, price, author, isbn) {
        this.name = name;
        this.price = price;
        this.author = author;
        this.isbn = isbn;
    }
    
    PrintItem() {
        console.log(this.author + ': ' + this.price + ' , ' + this.isbn);
    }
}

//  ctors
let item_1 = new Item('Item 1', 12.20, 'Max Mustermann', '123-4-5678-9012-3')
let item_2 = new Item('Item 2', 15.80, 'John Doe', '123-4-5678-8765-4' )

// impliziter Aufruf der contructor() Methode
let item_3 = new CItem('Item 3', 14.95, 'Anna Nano', '122-6-5678-6676-3' )


item_1.PrintItem(); // Max Mustermann: 12.2
item_2.PrintItem(); // John Doe: 15.8
item_3.PrintItem(); // Anna Nano: 14.95 , 122-6-5678-6676-3

console.log(item_1 instanceof Item);    // true
console.log(item_1 instanceof Object);  // true
console.log(item_1 instanceof Array);   // false

let keys = Object.keys(item_1);
console.log(keys);      // (5) ['name', 'price', 'author', 'isbn', 'PrintItem']
let values = Object.values(item_1);
console.log(values);    // (5) ['Item 1', 12.2, 'Max Mustermann', '123-4-5678-9012-3', ƒ]
let entries = Object.entries(item_1);
console.log(entries);   // (5) [Array(2), Array(2), Array(2), Array(2), Array(2)]
                        // 0:(2) ['name', 'Item 1']
                        // 1:(2) ['price', 12.2]
                        // 2:(2) ['author', 'Max Mustermann']
                        // 3:(2) ['isbn', '123-4-5678-9012-3']
                        // 4:(2) ['PrintItem', ƒ]


for(let prop in item_1) {
    console.log('Name: ' + prop);
    console.log('Value: ' + item_1[prop]);
}
/*
Name: name
Value: Item 1
Name: price
Value: 12.2
Name: author
Value: Max Mustermann
Name: isbn
Value: 123-4-5678-9012-3
Name: PrintItem
Value: function() {
        console.log(this.author + ': ' + this.price)
    }
*/
