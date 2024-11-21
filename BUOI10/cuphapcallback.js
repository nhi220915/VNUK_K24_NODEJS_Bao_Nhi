// hàm A có một tham số callback
function A(callback) {
    const kq = 5+6;
    callback(kq);
}

function B(kq) {
    // code
    console.log('Hello kq: ' + kq);
}

// gọi hàm B và truyền tham số là hàm A
A(B);