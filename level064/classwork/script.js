function sweapFloor() {
  return new Promise((resolve, reject) => {

    // setTimeout ვიყენებთ იმისთვის რომ შევქმნა დროის დაგვიანების სიმულაცია
    setTimeout(() => {

      //ვამოწმებთ გვაქვს თუ არა საკმარისი საწმენდი საშუალება
      let hasCleaningLiquid = true; 

      if (hasCleaningLiquid) {
        // თუ საკმარისი საშუალება გვაქვს წარმატებულია
        resolve("Floor is clean");
      } else {
        // თუ არ გვაქვს საკმარისი საშუალება შეცდომაა
        reject("Not enough cleaning liquid");
      }

    }, 2000); 
  });
}

sweapFloor()
  .then((result) => {
    // then გაეშვება იმ შემთხვევაში თუ resolve გამოიძახება
    // რეალურ ცხოვრებაში: საქმე კარგად დასრულდა
    console.log("SUCCESS:", result);
  })
  .catch((reason) => {
    // catch გაეშვება იმ შემთხვევაში თუ reject გამოიძახება
    // რეალურ ცხოვრებაში: რაღაც გაფუჭდა
    console.log("Error:", reason);
  })
  .finally(() => {
    // finally ყოველთვის გაეშვება მნიშვნელობა არ აქვს წარმატება იყო თუ შეცდომა
    // რეალურ ცხოვრებაში: საქმის შემდეგ ვასუფთავებთ ხელსაწყოებს და ვისვენებთ
    console.log("Finally: work is finished, I can rest");
  });
