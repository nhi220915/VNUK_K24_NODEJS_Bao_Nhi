function greet(name, callback) {
    console.log('Hello ' + name + '!' );
    callback();
}

function sayGoodbye() {
    console.log('Goodbye');
}

// gọi hàm greet và truền hàm sayGoodbye làm callback
greet('Alice', sayGoodbye);