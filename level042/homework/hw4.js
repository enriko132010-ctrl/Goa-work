let products = [apple, banana, bread, orange, water, milk];

let input = prompt('Enter product name').toLowerCase();

if (products.includes(input)) {
    console.log('The product is in the products array')
} else {
    console.log('The produt is not in products array')
}
