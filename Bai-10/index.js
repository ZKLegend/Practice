// Write a function that returns the largest element in a list.
let resultBtn = document.querySelector('.resultBtn');
let numberBtn = document.querySelector('.numberBtn');
let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];

// Đưa số lớn nhất về cuối mảng
for (let i = 0; i < list.length; i++) {
    if (list[i] > list[i+1]) {
        let b = list.slice(i, i+1);
        list[i] = list[i+1];
        list[i+1] = b[0];
        b.splice(0,1);
    }
   
}
let max = list[list.length - 1];

// Show kết quả
function showMax(a) {
    let p = document.createElement('p');
    p.innerHTML = a;
    document.body.appendChild(p);
}


resultBtn.addEventListener('click', () => {
    event.preventDefault;
    showMax(max)
});