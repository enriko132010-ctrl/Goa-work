class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getUserInfo() {
        console.log(
            `Hello my name is ${this.name} and I am ${this.age} years old`
        );
    }
}

const user1 = new Person("Nino", 20);
const user2 = new Person("Gio", 25);
const user3 = new Person("Luka", 18);

user1.getUserInfo();
user2.getUserInfo();
user3.getUserInfo();