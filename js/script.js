function setImage(url, text) {
    console.log('вызвана функция');
    document.getElementById('image').src = "img/" + url;
    document.querySelector('.txt').innerHTML = text;
}

function showPrice(id, price) {
    document.querySelector('#' + id).innerHTML = price;
}

function sum() {
    let result = 0;
    let radios = form.elements.option;
}
