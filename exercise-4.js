function sum(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0); 
}

const numbers = [1, 2, 3];
console.log(sum(...numbers));