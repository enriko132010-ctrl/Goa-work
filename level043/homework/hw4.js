const products = ["Phone", "Laptop", "Mouse", "Keyboard"];

let userProduct = prompt("Enter product name:");

if (products.includes(userProduct)) {
    console.log("The product is in products array");
} else {
    console.log("The product is not in products array");
}