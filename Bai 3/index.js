function Greeting() {
    let fullname = document.getElementById('name').value;
    let p = document.createElement('p');
    p.innerHTML = `Xin chao ${fullname}`;
    document.body.appendChild(p);
}