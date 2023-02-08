
function repeatHello(callback) {
  setInterval(callback, 1000);
}

const greeting = () => console.log("hello");

repeatHello(greeting); 