// async/await ვიყენებთ ასინქრონული კოდის ანუ (დროის მომთხოვნი) კოდისთვის
// მაგ: fetch და settimeout

// async_ი ფუნქციას ხდის ასინქრონულს და აბრუნებს promise_ს 
// ხოლო await აჩერებს კოდის შესრულებას მანამ სანამ promise არ დასრულდება

// try და catch გამოიყენება შეცდომების საპოვნელად
// try_ში ვწერთ კოდს რომელშიც შეილება შეცდომა მოხდეს
// catch_ი კი იჭერს ამ შეცდომას


async function getProducts() {

    try {
        const response = await fetch("https://fakestoreapi.com/products");
        const products = await response.json();
        renderProducts(products)
    } catch (error) {
        console.log("error: ", error)
    }
}

function renderProducts(products) {

  const container = document.getElementById("products");

  products.forEach(product => {

    const div = document.createElement("div");

    div.innerHTML = `
      <img src="${product.image}" width="100">
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>$${product.price}</p>
    `;

    container.appendChild(div);

  });

}

getProducts()



// try და catch გამოიყენება შეცდომების საპოვნელადდ

// try_ში ვწერთ კოდს რომელშიც შეილება შეცდომა მოხდეს
// catch_ი კი იჭერს ამ შეცდომას

// ვქმნით 3 Promise-ს
// თითოეული resolve-ს აბრუნებს success message-ს



// const promise1 = new Promise(resolve => {
//   resolve("Promise 1 success");
// });

// const promise2 = new Promise(resolve => {
//   resolve("Promise 2 success");
// });

// const promise3 = new Promise(resolve => {
//   resolve("Promise 3 success");
// });


// Promise.all()
// იღებს რამოდენიმე Promise-ს ერთ მასივში
// მერე დაელოდება სანამ ყველა დასრულდება
// თუ ყველა წარმატებულია then გაეშვება
// თუ შეცდომაა catch გაეშვება

// Promise.all([promise1, promise2, promise3])
//   .then(results => {console.log(results) })
//   .catch(err => console.log(err));
