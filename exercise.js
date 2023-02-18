
    const promise = new Promise ((resolve, reject) => {

    const isLogged = true;
    if(isLogged) {
        const randomNum = Math.random();
        resolve(randomNum);
    } else {
       return Promise.reject(new error("logged is undefined"));
    }
    }); 
    
    const promise2 = (randomNum) => {
        return new Promise ((resolve, reject) => {
            if(randomNum > 0.5) {
                resolve ({name: "John", age: 24});
            }else {
                reject(new Error("Random number is not greater than 0.5"))
            }
    
        });
    }
    
    promise
    .then(promise2)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      console.log("Promise completed");
    });


