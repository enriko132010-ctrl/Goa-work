// ვიღებთ form ელემენტს DOMდან idის მიხედვით
const form = document.getElementById('formElement');

// ვიღებთ tbodyს
const tbody = document.getElementById('tbody');

/*
    localStorage — არის ბრაუზერის მეხსიერება,
    სადაც მონაცემები ინახება მუდმივად.
    localStorage-ში მონაცემები ინახება მხოლოდ STRING-ის სახით,
    ამიტომ ვიყენებთ JSON.parse და JSON.stringifyს.
*/

// ვიღებთ localStorage-ში შენახულ პროდუქტებს
// თუ არაფერი არ არის შენახული, ვიყენებთ ცარიელ მასივ
const products = JSON.parse(localStorage.getItem('products')) || [];

// პროდუქტის დამატების ფუნქცია
const addItem = (product) => {

    // ვამოწმებთ, არსებობს თუ არა იგივე სახელის პროდუქტი
    const exists = products.find((obj) => obj.name === product.name);

    if (exists) {
        alert('The product name already exists!');
        return;
    }

    // ახალ პროდუქტს ვამატებთ მასივში
    products.push(product);

    /*
        localStorage.setItem(key, value)
        - ინახავს მონაცემს localStorage-ში
        - value აუცილებლად უნდა იყოს STRING,
          ამიტომ ვიყენებთ JSON.stringify()-ს
    */
    localStorage.setItem('products', JSON.stringify(products));
};

// პროდუქტის წაშლის ფუნქცია idის მიხედვით
const deleteItem = (id) => {

    // ვპოულობთ პროდუქტის ინდექსს
    const productIndex = products.findIndex((product) => product.id === id);

    if (productIndex === -1) {
        alert('Product does not exist with the given id');
        return;
    }

    // ვშლით პროდქტს მასივიდან
    products.splice(productIndex, 1);

    // განახლებული მასივი თავიდან ვინახავთ localStorage-ში
    localStorage.setItem('products', JSON.stringify(products));

    renderProductInTable();
};

const renderProductInTable = () => {

    // ვასუფთავებთ tbody-ს
    tbody.innerHTML = '';

    // თითოეულ პროდუქტზე ვქმნით ახალ tr ელმენტს
    products.forEach(product => {
        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td>${product.name}</td>
            <td>${product.id}</td>
            <td>
                <button onclick="deleteItem(${product.id})">Delete</button>
            </td>
        `;

        // tr-ს ვამატებთ tbody-ში
        tbody.appendChild(tr);
    });
};

// formის submit event
form.addEventListener('submit', (e) => {

    // ვაჩერებთ გვერდის refresh
    e.preventDefault();

    // input-იდან ვიღებთ პროდუქტის სახელს
    const productName = e.target.productName.value;

    // ვქმნით პროდუქტის ობიექტს
    const product = {
        name: productName,
        id: Date.now() 
    };

    // პროდუქტს ვამატებთ
    addItem(product);

    // თავიდან ვხატავთ ცხრილს
    renderProductInTable();

    // ვასუფთავებთ input-ს
    e.target.reset();
});

// გვერდის ჩატვირთვისას ავტომატურად იხატება localStorage-ში არსებული პროდუქტები
renderProductInTable();



/*
სინქრონიზაცია მუშაობს ნაბიჯ-ნაბიჯ.
ერთ რაღაცას სანამ არ დაასრულებს, შემდეგზე არ გადადის.

ცხოვრებისეული მაგალითი
რიგში დგახარ მაარაზიაში.
დგახარ რიგში და სანამ პირველი ადამიანი არ გადაიხდის და არ წავა,
შემდეგ ადამიანს ვერ მოემსახურებიან.

პროგრამირებაში მაგალითი
კოდი სრულდება ზემოდან ქვემოთ.
თუ ერთი ფუნქცია დიდ დროს მოითხოვს,
მთელი პროგრამა "გაჩერდება" მის დასრულებამდე.
*/

console.log('Step 1');
console.log('Step 2');
console.log('Step 3');


// ასინქრონული მაგალითი
console.log('game start');

setTimeout(() => {
    console.log('time out');
}, 2000);

console.log('game finished');