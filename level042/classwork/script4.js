const nums = [10, 5, -3, 8, -9, 20];

function firstNegative(arr) {
  for (let item of arr) {
    if (item < 0) {
      return item;
    }
  }
}

console.log(firstNegative(nums));  
