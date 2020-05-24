class MyClass {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}

let v = new MyClass('Dagobert');
v.printName();
