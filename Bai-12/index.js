// Write a function that checks whether an element occurs in a list.

let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];

// Check xem số nhập vào có ở trong list không
// Tham số của hàm nên đặt tên như thế nào thì hợp lý
// Nếu em đặt tham số là value, number thì sẽ bị trùng khi nhét biến ở dưới vào?
function checkNumber(a) {
    for (let i = 0; i < list.length; i++) {
        if (a == list[i]) {    
            return true;
        }
        else {false};
    }
}

// Display Result on HTML
function displayResult() {
    event.preventDefault();
    let number = document.querySelector('.number');
    let value = number.value;
    // checkNumber(value);
    if (checkNumber(value)) {
        let p = document.createElement('p');
        p.innerHTML = "Số này có trong list";
        document.body.appendChild(p);
    }
    else {
        let p = document.createElement('p');
        p.innerHTML = "Số này không có trong list";
        document.body.appendChild(p);
    }
}

// Nên dùng addEventlistener hay nên dùng Onclick ở bên html
// Khi nào nên dùng cái nào?
