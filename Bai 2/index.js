function Greeting() {
    let fullname = document.getElementById('name').value;
    let p = document.createElement('p');
    if (fullname == 'Alice' || fullname == 'Bob')
    // Có cách nào shorthand đoạn dòng trên không?
    {
        p.innerHTML = `Xin chao ${fullname}`;
        document.body.appendChild(p);
    }
    else {
        return;
    }
}