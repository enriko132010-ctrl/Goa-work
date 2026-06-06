class Robot {
    #name; // private field

    constructor(name, energyLevel = 100) {
        this.#name = name;
        this._energyLevel = energyLevel;
    }

    get name() {
        return this.#name;
    }

    get energyLevel() {
        return this._energyLevel;
    }

    set energyLevel(value) {
        this._energyLevel = value;

        if (this._energyLevel < 50) {
            console.log("The robot needs the recharge");
        } else {
            console.log("The robot is full of energy");
        }
    }

    introduce() {
        console.log(
            `Hello, I am ${this.#name} and my energy level is ${this._energyLevel}`
        );
    }

    run() {
        this.energyLevel = this._energyLevel - 20;
    }

    doDishes() {
        this.energyLevel = this._energyLevel - 40;
    }
}

const robot1 = new Robot("Robo");

robot1.introduce();

robot1.run();
robot1.introduce();

robot1.doDishes();
robot1.introduce();