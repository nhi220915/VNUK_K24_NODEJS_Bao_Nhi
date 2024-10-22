class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Phuong thuc de hien thi thong tin cua Person
    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

// khoi tao mot doi tuong tu class Person
const person1 = new Person("Alice", 30);
const person2 = new Person("Bob", 25);

// goi phuong thuc de hien thi thong tin cua Person
person1.displayInfo(); //output: Name: Alice, Age: 30 
person2.displayInfo(); //output: Name: Bob, Age: 25

person2.name = "abc"
console.log(person2.name);