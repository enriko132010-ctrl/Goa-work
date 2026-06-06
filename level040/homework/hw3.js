function checkPassword(password) {
    let hasPunctuation = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if ( char === "!" || char === "@" || char === "#" || char === "$" || char === "%" || char === "&" || char === "*") {
            hasPunctuation = true;
        }

        if (!isNaN(char) && char !== " ") {
            hasNumber = true;
        }
    }

    if ((hasPunctuation && password.length > 6) || hasNumber) {
        return "Your password is strong";
    }

    return "Your password is weak";
}

let password = prompt("Enter password:");
console.log(checkPassword(password));