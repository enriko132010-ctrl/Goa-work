const renderCars = (parent, cars) => {
    parent.innerHTML = '';

    cars.forEach((car, index) => {
        parent.innerHTML +=
            `
                <div class="car-card">
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Year: ${car.year}</p>
                    <p>Price: ${car.price}</p>
                    <img src="${car.image}" width="150">
                    <br>
                    <button onclick="carManager.deleteCar(${index})">Delete</button>
                </div>
            `
        ;
    });
}

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