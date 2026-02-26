let messy = '    hello world     ';

let trimmed = messy.trim();

let words = trimmed.split('');

let fixed = words.map(word => {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
});

let result = fixed.join('');
console.log(result);