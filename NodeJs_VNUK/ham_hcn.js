// hàm tính cv hcn
const perimeter = (length, width) => 2 * (length + width);

// hàm tính dt hcn
const area = (length, width) => (length * width);

// khai báo cd và cr
const length = 9;
const width = 3;

// tính cv và dt
const recPerimeter = perimeter(length, width);
const recArea = area(length, width);

// in kq
console.log(`Chu vi hình chữ nhật là:  ${recPerimeter}`);
console.log(`Diện tích hình chữ nhật là: ${recArea}`);