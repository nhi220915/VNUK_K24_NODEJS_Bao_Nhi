class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    displayInfo() {
        console.log(`Width: ${this.width}, Height: ${this.height}`);
    }
}

const paramterRect = new Shape() 