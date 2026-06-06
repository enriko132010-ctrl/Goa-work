const renderProducts = (parent, products) => {
    parent.innerHTML = '';
    
    for(const product of products){
        parent.innerHTML += `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price}</td>
                <td>${product.category}</td>
            </tr>
        `
    }
}

class Product {
    constructor(name, price, category){
        this.name = name;
        this.price = price;
        this.category = category;
        this.id = Date.now();
    }
}

class ProductManager {
    constructor(){
        this.products = [];
    }

    addProduct(name, price, category){
        const product = new Product(name, price, category);
        this.products.push(product);
        renderProducts(tbody, this.products);
    }

    filterByCategory(category){
        if(category === 'all'){
            renderProducts(tbody, this.products);
        } else {
            const filteredProducts = this.products.filter(product => product.category === category);
            renderProducts(tbody, filteredProducts);
        }
    }
}


const form = document.querySelector('form');
const tbody = document.querySelector('tbody');
const filterCategory = document.getElementById('filter-category');
const productManager = new ProductManager();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value;
    const price = form.price.value;
    const category = form.category.value;

    productManager.addProduct(name, price, category);
});

filterCategory.addEventListener('change', () => {
    const category = filterCategory.value;
    productManager.filterByCategory(category);
});