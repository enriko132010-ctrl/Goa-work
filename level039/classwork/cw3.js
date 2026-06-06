const name = prompt("Enter Your name:")

function greet() {
    if (name) {
        console.log("Hello" + " " + name)
    } else {
        console.log("Hello guest")
    }
}
greet();