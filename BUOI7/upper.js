// class Employee {
//     getClassName() {
//         return "Class Employee";
//     }
// };
// class MaleEmployee extends Employee {
//     getClassName(){
//         return "Class MaleEmployee";
//     }
//     classClassName() {
//         return super.getClassName();
//     }
// }
// var employee = new MaleEmployee();
// console.log(employee.classClassName());
// kq: Class Employee

class Animal {
    getName() {
        return "Class Animal";
    }
}

class Dog extends Animal {
    getName() {
        return "Class Dog";
    }

    ClassName() {
        return super.getName();
    }
}

var dog = new Dog();
console.log(dog.ClassName()); // Output: Class Animal
