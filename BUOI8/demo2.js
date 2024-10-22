// Hàm hello
function hello() {
    console.log("Hello!");
}

class Student {
    constructor(id, name, grade) {
        this.id = id;
        this.name = name;
        this.grade = grade;
    }

    
    showInfor() {
        console.log(`id: ${this.id}, name: ${this.name}, grade: ${this.grade}`);
    }

    averageMark() {
        console.log(`Average mark: ${this.grade}`);
    }
}

// Xuất các phần tử để sử dụng trong file khác
module.exports = {
    hello: hello,
    Student: Student
};
