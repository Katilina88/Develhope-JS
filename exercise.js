function printAsyncName(callback, name) {
    let firstName = setInterval(() => {
        callback(name);
        clearInterval(firstName);
    }, 1000);

    setTimeout(() => {
        console.log(name);

    }, 2000);

}

printAsyncName(name => console.log("hello"), "Caterina");  