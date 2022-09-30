let input = document.querySelector('.input');
let button = document.querySelector('.button');
let result = [];


function genLeapYears() {
    let date = input.value.split('-');
    let year = date[0];
    for (let i = year; i++;) {
        if (i % 4 == 0) {
            console.log(i);
            result.push(i);
            if (result.length >= 20) {
                return;
            }
        }
    }
}

function displayResult() {
    genLeapYears();
    console.log(result);
    for (let m = 0; m < result.length; m++) {
        let p = document.createElement('p');
        p.innerHTML = result[m];
        document.body.appendChild(p);
    }
}
    
button.addEventListener('click', displayResult);






