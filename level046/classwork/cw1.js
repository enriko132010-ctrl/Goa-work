const manualReduce = (arr, fn, acc) => {
    for (let item of arr) {
        acc = fn(acc, item);
    }
    return acc
}

const names = ['luka', 'lile', 'nia'];

const result = manualReduce(names,(acc, names) => {
    acc.push(names.toUpperCase());
    return acc;
}, []); 

console.log(result);

// class Account {
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password
//     }
// }

// const acc1 = new Account("luka", "luka@gmail.com", "1234");
// const acc2 = new Account("nia", "nia@gmail.com", "abcd");
// const acc3 = new Account("gio", "gio@gmail.com", "pass999");

// console.log(acc1);
// console.log(acc2);
// console.log(acc3);

// კლასი არის (ნახაზი), რომლის მიხედვითაც იქმნება ობიექტები

// constructor არის სპეციალური ფუნქცია, რომელიც: ავტომატურად ეშვება, როცა ახალი ობიექტი იქმნება მერე იღებს მონაცემებს 
// (username, email, password) და ამ მონაცემებს ინახავს ობიექტში

// this ნიშნავს „ეს კონკრეტული ობიექტი“ ამ შემთხვევაში მაგ: this.username = username;

// new გამოიყენება ახალი ობიექტის შესაქმნელად


// იმიტომ უნდა გამოვიყენოთ კლასი რადგან კლასის გამოყენებისასაღარ ვწერთ ერთსა და იმავეს ბევრჯერ და მარტივია ბევრი ობიექტის შექმნა

class Account {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  
  login(email, password) {
    // this მიუთითებს კონკრეტულ ობიექტზე,
    // მაგალითად acc1 ან acc2
    if (this.email === email && this.password === password) {
      // template literal (` `) + ${}
      // გვაძლევს საშუალებას ტექსტში ჩავსვათ ცვლადის მნიშვნელობა
      console.log(`Successfully logged in as ${this.username}`);
    } else {
      console.log(`Login failed for email: ${email}`);
    }
  }
}

// new keyword ქმნის ახალ ობიექტს Account კლასის მიხედვით
const acc1 = new Account("luka", "luka@gmail.com", "1234");
const acc2 = new Account("nia", "nia@gmail.com", "abcd");
const acc3 = new Account("gio", "gio@gmail.com", "pass999");

// ვიძახებთ login მეთოდს კონკრეტული ობიექტისთვის
acc1.login("luka@gmail.com", "1234");
acc2.login("nia@gmail.com", "wrong");




// constructor გამოიყენება ობიექტის შესაქმნელად
// აქ ვინახავთ საწყის მონაცემებს (username, email, password)

// კლასში კი მეთოდის გამოყენება უკეთესია რადგან კოდი არ მეორდება
// კოდი არ მეორდება და უფრო გასაგები და სუფთა კოდია