// Write a function that tests whether a string is a palindrome

let list = [34, 48, 2, 22, 21, 82, 12, 9, 64, 73, 59];
let list2 = [34, 48, 2, 22, 21, 82, 21, 22, 2, 48, 34]

// Kiểm tra điều kiện Palindrome
function checkPalindrome(param) {
for (let i = 0; i <= param.length/2; i++) {
    if (list[i] !== param[param.length - (i + 1)]) {
        return false;
    }
    else {
        return true;
    }
}
}

// Show Kết quả
function showResult(n) {
    if (checkPalindrome(n)) {
        console.log("Palindrome List");
    }
    else {
        console.log("Not Palindrome List");
    }
}

showResult(list2);

