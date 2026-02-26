const nums = [10, 55, 7, 99, 23, 150, 4];

let max = nums[0];

for (let i = 1; i < nums.length; i++) {
  if (nums[i] > max) {
    max = nums[i];
  }
}

console.log("Max number:", max);
