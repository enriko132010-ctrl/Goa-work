fetch("https://fakestoreapi.com/products")
  .then(res => res.json())        
  .then(products => renderProducts(products)) 
  .catch(err => console.log(err));  


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