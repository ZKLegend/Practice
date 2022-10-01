// Write a guessing game where the user has to guess a secret number. 
// After every guess the program tells the user whether their number was too large or too small. 
// At the end the number of tries needed should be printed. 
// It counts only as one try if they input the same number multiple times consecutively.

let randomNumber = Math.floor(Math.random() * 1000);
console.log(randomNumber);
let button = document.querySelector(".button");
let input = document.querySelector(".input");
let counter = 0;
let array = [];

function guessNumber() {
  let value = input.value;
  console.log(value);
  array.push(value);
  console.log(array);
  let x = value - randomNumber;
  if (value == randomNumber) {
    let paragraph = document.createElement("p");
    paragraph.innerHTML = `Chúc mừng! Bạn đã đoán đúng số ${randomNumber}`;
    document.body.appendChild(paragraph);
  } else {
    if (Math.abs(x) < 100) {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `Gần đúng rồi!`;
      document.body.appendChild(paragraph);
    } else {
      let paragraph = document.createElement("p");
      paragraph.innerHTML = `Kết quả cách xa quá!`;
      document.body.appendChild(paragraph);
    }
    if (counter > 5) {
      alert(`Xin lỗi! Bạn đã hết lượt đoán! Kết quả là: ${randomNumber}`);
      return window.location.reload();
    }
  }
    counter += 1;
    console.log(counter);
}



button.addEventListener("click", guessNumber);

// Cứ mỗi điều kiện em lại phải lặp lại mấy dòng lệnh tạo và nhét paragraph vào HTML
// Chưa biết có phương án nào ok hơn ko?
