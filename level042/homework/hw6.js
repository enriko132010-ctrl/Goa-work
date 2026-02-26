let password = ["abc123", "hello", "mypassword1", "test", "Strong99", "nope"];

function strongPassword(arr) {
    return arr.filter(pass => {
        return pass.length > 6 && /\d/.test(pass);
    })
}

console.log(strongPassword(password));