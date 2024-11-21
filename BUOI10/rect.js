function AreaRect(a, b, callback) {
    const Area = a*b;
    callback(Area);
}

function display(Area) {
    console.log('Area Rect: ' + Area);
}

// gọi hàm
AreaRect(5, 6, display);