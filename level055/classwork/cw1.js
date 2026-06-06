const renderCars = (parent, cars) => {
    // კონტეინერის გასუფთავება
    parent.innerHTML = '';

    cars.forEach((car, index) => {
        // მთავარი card div
        const card = document.createElement('div');
        card.classList.add('car-card');

        // h3 - brand + model
        const title = document.createElement('h3');
        title.textContent = `${car.brand} ${car.model}`;

        // year
        const year = document.createElement('p');
        year.textContent = `Year: ${car.year}`;
        year.style.color = 'white'; // მხოლოდ პარაგრაფი თეთრად

        // price
        const price = document.createElement('p');
        price.textContent = `Price: ${car.price}`;
        price.style.color = 'white'; // მხოლოდ პარაგრაფი თეთრად

        // image
        const img = document.createElement('img');
        img.src = car.image;
        img.width = 150;

        // br
        const br = document.createElement('br');

        // delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.style.backgroundColor = 'gray'; // მხოლოდ ღილაკი ნაცრისფრად
        deleteBtn.style.color = 'white';
        deleteBtn.style.border = 'none';
        deleteBtn.style.padding = '6px 10px';
        deleteBtn.style.cursor = 'pointer';

        deleteBtn.addEventListener('click', () => {
            carManager.deleteCar(index);
        });

        // ელემენტების ჩასმა card-ში
        card.appendChild(title);
        card.appendChild(year);
        card.appendChild(price);
        card.appendChild(img);
        card.appendChild(br);
        card.appendChild(deleteBtn);

        // card-ის ჩასმა parent-ში
        parent.appendChild(card);
    });
};



class Car {
    constructor(brand, model, year, price, image){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.price = price;
        this.image = image;
    }
}

class CarManager {
    constructor() {
        this._cars = [];
        this._carsContainer = document.getElementById('cars');
    }

    addCar(brand, model, year, price, image){
        const car = new Car(brand, model, year, price, image);
        this._cars.push(car);
        renderCars(this._carsContainer, this._cars);
    }

    deleteCar(index) {
        this._cars.splice(index, 1);
        renderCars(this._carsContainer, this._cars);
    }

}

const form = document.querySelector('form');
const carManager = new CarManager();

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const brand = form.brand.value;
    const model = form.model.value;
    const year = form.year.value;
    const price = form.price.value;
    const image = form.image.value;

    carManager.addCar(brand, model, year, price, image);

    form.reset();
});