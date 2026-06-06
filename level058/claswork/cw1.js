// let seconds = 0; 

// let timer = setInterval(() => {
//     seconds++; 
//     console.log(seconds); 

//     if (seconds == 10) { 
//         clearInterval(timer); 
//         console.log("Times Up"); 
//     }
// }, 1000); 

// const box = document.getElementById('box');

// let pos = 0;
// let direction = 'right';
// const stopPos = 150;

// const id = setInterval(() => {
//     if(pos === 150) {
//         direction = 'left';
//     } else if (pos === 0){
//         direction = 'right';
//     } if (direction === 'right') {
//         pos++;
//     } else {
//         pos--;
//     }
//     box.style.left = pos+'px'
// }, 20);


const box = document.getElementById('box');

let x = 0;
let y = 0;
let direction = 'right';

const max = 150;

setInterval(() => {
    if (direction == 'right') {
        x++;
        if (x == max) direction = 'down';
    } else if (direction == 'down') {
        y++;
        if (y == max) direction = 'left';
    }  else if (direction === 'left') {
        x--;
        if (x === 0) direction = 'up';
    }else if (direction == 'up') {
        y--;
        if (y == 0) direction = 'right'
    }

    box.style.left = x + 'px';
    box.style.top = y + 'px';
}, 20)


