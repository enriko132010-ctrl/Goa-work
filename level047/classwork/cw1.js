// class Animal {
//     constructor(name, type, age) {
//         this.name = name;
//         this._type = type;
//         this.age = age;
//     }

//     get type() {
//         return this._type;
//     }


//     set type(newType) {
//         const allowedTypes = ['chiken', 'bird', 'reptile', 'fish'];


//         if (allowedTypes.includes(newType)) {
//             this._type = newType;
//         } else {
//             console.log('this type doesnt exist!');
//         }
//     }
// }


// const animal1 = new Animal("Leo", "mammal", 5);

// console.log(animal1.type); 

// animal1.type = "bird";
// console.log(animal1.type); 

// animal1.type = "dragon";
// console.log(animal1.type);






class Account {
    constructor(email, password, fullname) {
        this._email = email;
        this.password = password;
        this.fullname = fullname;
    }

    greet() {
        console.log(`Hello my name is ${this.fullname}`);
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(value)) {
            console.log("error: Invalid email format.");
            return;
        }

        this._email = value;
    }
}



//class არის შაბლონი, რომლის მიხედვიტაც ვქმნით ობიექტებს
// მეთოდი არის ფუნქცია, რომელიც ეკუთვნის კლასს
// set გამოიყენება private კუთვნილების შესაცვლელად
// constructor გამოიყენება ობიექტის შესაქმნელად სადაც ვინახანთ საწყის მონაცემებს