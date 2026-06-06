const promisedReturn = new Promise((resolve, reject) =>{
const randomNumber = Math.round(Math.random());

    if (randomNumber == 1) {
        resolve( "Yeee i survived as i promised");
    } else {
        reject( "No i died because of low food");
    }
});

console.log(promisedReturn)