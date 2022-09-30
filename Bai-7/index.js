let button = document.querySelector(".button");
let input = document.querySelector(".input");

let table = document.createElement('table');
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
table.appendChild(thead);
table.appendChild(tbody);
document.querySelector('body').appendChild(table);





function getNumber() {
    let value = input.value;
        if (value > 12) {
            return;
        }
    let tr = document.createElement('tr');
    thead.appendChild(tr);
    for (let i = 0; i <= value; i++) {
        let th = document.createElement('th');
        th.innerHTML = i;
        tr.appendChild(th);
    }
}

function createTable() {
    getNumber;
    let value = input.value;
    if (value > 12) {
        alert("Only up to 12");
        return;
    }
    console.log(value);
    for (let i = 1; i <= 10; i++) {
        let tr = document.createElement('tr');
        let th = document.createElement('th');
        th.innerHTML = i;
        tbody.appendChild(tr);
        tr.appendChild(th);
        for (let m = 1; m <= value; m++) {
            td = document.createElement('td');
            td.innerHTML = m*i;
            tr.appendChild(td);
        }
    }
    console.log(table);
}

button.addEventListener('click', createTable);

