class Circle {
    constructor(radius) {
        this._radius = radius; //su dung dau gach duoi de dat ten thuoc tinh la private
    }

    // Getter de lay gia tri ban kinh
    get radius() {
        return this._radius;
    }

    // Setter de thiet lap gia tri ban kinh, kiem tra gia tri am
    set radius(newRadius) {
        if (newRadius > 0) {
            this._radius = newRadius;
        } else {
            console.log("Ban kinh phai la mot so duong");
        }
    }

    // Phuong thuc tinh dien tich hinh tron
    calculateArea() {
        return Math.PI * this._radius * this._radius;
    }
}

// Su dung class Circle
let circle = new Circle(5);
console.log("Ban kinh ban dau: " + circle.radius); //Output: Ban kinh ban dau: 5 

circle.radius = 10; // su dung setter de thiet lap gia tri ban kinh moi
console.log("Ban kinh moi: " + circle.radius); //Output: Ban kinh moi: 10

circle.radius = -3 // su dung setter de thiet lap gia tri ban kinh am
// Output: Ban kinh phai la mot so duong