
function repeatHello(callback) {
  setInterval(callback, 1000);
}

const greeting = () => console.log("hello");

repeatHello(greeting); 

//la sintassi è più concisa, sono più brevi e semplici da leggere 
