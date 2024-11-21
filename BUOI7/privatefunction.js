class MyClass {

    // private property
    #x = 0;

    // private method
    #incX() {
        this.#x++;
        console.log(this.#x);
    }

    // private setter 
    set #setX(x) {
        this.#x = x;
    }

    // private getter
    get #getX() {
        return this.$x;
    }
}
const m = new MyClass();

m.incX();