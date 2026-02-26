const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment');
const resetBtn = document.getElementById('reset');

let count = 0;





// Event listener
// Old way
// incrementBtn.onclick = () => {
//     count++;
//     countDisplay.textContent = `Count: ${count}`;
// }

// New Way
incrementBtn.addEventListener('click', () => {
    count++;
    countDisplay.textContent = `Count: ${count}`;
});

// reset ღილაკი
resetBtn.addEventListener('click', () => {
    count = 0;
    countDisplay.textContent = `Count: ${count}`;
});