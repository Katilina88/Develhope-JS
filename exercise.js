
const number = 15;

let ourPromise = new Promise((resolve, reject) => {
  
    if(number > 10) {
        resolve(`The number ${number} is greater than 10 `)
    }else {
        reject(`The number ${number} is not greater than 10 `)
    }
});

ourPromise 
.then((val) => console.log(val))
.catch((err) => console.error(err));
