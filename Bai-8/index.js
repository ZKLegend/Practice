let input = document.querySelector('.input');
let button = document.querySelector('.button');
let result = [];


function genLeapYears(year) { 
    for (let i = year; i++;) {
        if (i % 4 == 0) {
            console.log(i);
            result.push(i);
            if (result.length >= 20) {
                return result;
            }
        }
    }
}

function displayResult() {
    let date = input.value.split('-');
    let year = date[0];
    genLeapYears(2)
    let years = genLeapYears(year);
    console.log(result);
    for (let m = 0; m < result.length; m++) {
        let p = document.createElement('p');
        p.innerHTML = result[m];
        document.body.appendChild(p);
    }
}
    
button.addEventListener('click', displayResult);






