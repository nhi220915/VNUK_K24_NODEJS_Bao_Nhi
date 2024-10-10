// Block Scope (pham vi khoi) constructs Let
var a = 12; //khai bao toan cuc/cucbo
var b = 20;
if(a < b) {
    let tmp = a; //khai bao trong một khối
    a = b;
    b = tmp;
}

console.log("a: " + a);
console.log("b: " + b);
console.log("tmp: " + tmp); 