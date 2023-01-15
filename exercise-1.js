const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1; 

person2.firstName = "Simon";


// Modificando l'oggetto person 2, l'oggetto person1 si modifica pure perché è un riferimento all'oggetto person1
 

console.log(person1);
console.log(person2);

