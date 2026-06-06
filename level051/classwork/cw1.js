//  თავიდან შევქმენი ცარიელი მასივი  სადაც ყველა შექმნილი Account object შეინახება

const accounts = [];

/*
 Account კლასი
 ამ კლასის დახმარებით ვქმნით მომხმარებლის ობიექტებს
 თითოეულ მომხმარებელს ექნება: სახელი იმეილი პაროლი
*/

class Account {
    constructor(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }

    //აქ არის მეთოდი რომელიც მომხმარებელს მიესალმენა
    greet() {
    return `welcome ${this.name}`;
    }
}

// ფორმის აღება DOM-დან id-ის დახმარებით

const form = document.getElementById("registerForm");

const accountList = document.getElementById("accountList")

// აქ ვუსმენთ submit event_ს (მოვლენას)
form.addEventListener("submit", function (event) {
    
    // აქ რეფრეშს ვაჩერებთ
    event.preventDefault();

    // input_ების მნიშვნელობების ამოღება event.target_ით 
    const nameValue = event.target.username.value;
    const emailValue = event.target.email.value;
    const passwordValue = event.target.password.value;

    // შევამოწმე email-ი არსებობს თუ არა უკვე ეს email .some() აბრუნებს true-ს თუ მაინც ერთი ელემენტი 
    // აკმაყოფილებს პირობას
    
    const emailExists = accounts.some(
        account => account.email === emailValue
    );

    // თუ email უკვე არსებობს
    if (emailExists) {
        alert("this account is created!");
     // ვაჩერებთ ფუნქციის გაგრძელებას
    return;
    }
 
    /*
     ახალი Account object-ის შექმნა
     constructor იღებს: name, email, password
    */
    const newAccount = new Account(
        nameValue,
        emailValue,
        passwordValue
    );
    // ახალი აქაუნტის დამატება მასივში
    accounts.push(newAccount);
    // წარმატების შეტყობინება
    alert("Account created successfully!");
    // კონსოლში ვამოწმებთ შედეგს
    // ფორმის გასუფთავება
    console.log(accounts);

    event.target.reset();
})



function renderAccounts() {

    // ვასუფთავებ ძველ სიას
    accountList.innerHtml = "";

    accounts.forEach(account => {
        const li = document.createElement("li");

        li.textContent = `${account.name} - ${account.email}`;

        accountList.appendChild(li);
    })
}