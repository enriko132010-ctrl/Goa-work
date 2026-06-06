function generateUsername(username) {
    let cleanedUsername = username.replaceAll(" ", "");

    let randomNum = Math.floor(Math.random() * 100) + 1;

    return cleanedUsername + randomNum;
}

console.log(generateUsername("Nino Gvinjilia"));