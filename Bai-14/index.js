// Write a function that computes the running total of a list.

let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];
let sum = 0;

for (let i = 0; i < list.length; i++) {
    sum = sum + list[i];
}
console.log(sum);
