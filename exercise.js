function repeatHello(callback) {
    const repeat = setInterval(callback, 1000);
    setTimeout(() => cleartInterval(repeat), 5000)
  }
  
  const greeting = () => console.log("hello");
  
  repeatHello(greeting); 
