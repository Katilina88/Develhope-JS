function multiplyByTwo(value) {
  let number = 2;
  function inner() {
   let multiplication = value * number; 
   console.log(multiplication); 

  }
  
  return inner; 
}

multiplyByTwo(4)(); 
