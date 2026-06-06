// Super Class
class Fruit {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    getInfo() {
        console.log(
            `Fruit: ${this.name}, Price: ${this.price} GEL`
        );
    }
}

// Sub Class
class Apple extends Fruit {
    constructor(name, price, color) {
        super(name, price); // ვიძახებთ მშობლის constructor-ს

        this.color = color;
    }

    showColor() {
        console.log(`Apple color is ${this.color}`);
    }
}

// Sub Class
class Orange extends Fruit {
    constructor(name, price) {
        super(name, price);
    }

    makeJuice() {
        console.log(`Making juice from ${this.name}`);
    }
}

const apple1 = new Apple("Golden Apple", 3, "Yellow");
const apple2 = new Apple("Green Apple", 4, "Green");

const orange1 = new Orange("Orange", 5);

apple1.getInfo();
apple1.showColor();

apple2.getInfo();
apple2.showColor();

orange1.getInfo();
orange1.makeJuice();