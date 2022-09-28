let number = document.getElementById("input");
let result = 0;

function sumUp() {
    for (let i = 0; i <= number.value; i++) {
        // if (i % 3 == 0 || i % 5 == 0) {
        //     console.log(i);
        //     result += i;
        // }
        console.log(i);
        result += i;
    }
    if (number.value < 0) {
        alert("Must be > 0");
    }
    // Để đoạn if lên đầu thì function không chạy
    let p = document.createElement("p");
    p.innerHTML = result;
    document.body.appendChild(p);
}

// function computeProduct() {
//     for (let i = 0; i <= number.value; i++) {
//         console.log(i);
//         let p = document.createElement('p');
//         p.innerHTML = i;
//         document.body.appendChild(p);
//     }
//     if (number.value < 0) {
//         alert('Must be > 0');
//     }
//     // Để đoạn if lên đầu thì function không chạy

// }
// Sau khi ra kết quả lần đầu thì mỗi lần sau click sẽ xóa kết quả cũ đi
