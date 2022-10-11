// Write function that reverses a list, preferably in place.

let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];

for (let i = 0; i < list.length/2; i++) {
    // let lastElement = list[list.length - (i + 1)]; 
    let a = list[i];
    list[i] = list[list.length - (i + 1)];
    list[list.length - (i + 1)] = a;
    // Em khai báo biến cho cái element cuối của mảng thì đoạn gán này nó không nhận
}
console.log(list);