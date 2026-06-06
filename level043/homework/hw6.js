const passwords = [
    "abc123",
    "password1",
    "hello",
    "qwerty123",
    "test"
];

function strongPasswords(arr) {
    for (let i = 0; i < arr.length; i++) {
        let hasNumber = false;

        for (let j = 0; j < arr[i].length; j++) {
            if (!isNaN(arr[i][j]) && arr[i][j] !== " ") {
                hasNumber = true;
            }
        }

        if (arr[i].length > 6 && hasNumber) {
            console.log(arr[i]);
        }
    }
}

strongPasswords(passwords);