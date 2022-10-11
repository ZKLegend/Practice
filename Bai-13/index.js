// Write a function that returns the elements on odd positions in a list.

let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];
let result = [];

for (let i = 0; i < list.length; i++) {
    if (i % 2 == 1) {
        result.push(list[i]);
    }
}
console.log(result);