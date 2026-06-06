const button = document.getElementById("changeColorBtn");

button.addEventListener("click", () => {
    // 0-255 შუალედში random რიცხვები
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    document.body.style.backgroundColor =
        `rgb(${red}, ${green}, ${blue})`;
});


