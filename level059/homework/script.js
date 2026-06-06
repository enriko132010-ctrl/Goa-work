const form = document.getElementById('formElement');
const tbody = document.getElementById('tbody');

let products = [];

const deleteItem = (id) => {
    products = products.filter(product => product.id !== id);
    renderProductInTable(products);
};

const renderProductInTable = (productsArr) => {
    tbody.innerHTML = '';

    productsArr.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td>
                <button onclick="deleteItem(${product.id})">
                    Delete
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });
};

// ფორმის submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = e.target.productName.value.trim();

    if (!productName) return;

    const exists = products.find(
        (obj) => obj.name === productName
    );

    if (exists) {
        alert('The product name already exists!');
        return;
    }

    const product = {
        name: productName,
        id: Date.now()
    };

    products.push(product);
    renderProductInTable(products);

    e.target.reset();
});
