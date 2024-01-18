let globalX = 0;
let globalY = 0;
let zoom = 5;

$(document).on('mousemove', function (e) {
    globalX = e.pageX;
    globalY = e.pageY;
});

$('.zoom__images__item').on('mousemove', function (e) {
    let imgBlock = $(this).find('img');
    let imgWidth = imgBlock.width();
    let imgHeight = imgBlock.height();
    let cursor = $('.zoom__images__cursor');
    cursor.css('width', imgWidth / zoom + 'px');
    cursor.css('height', imgHeight / zoom + 'px');
    let cursorWidth = cursor.outerWidth();
    let cursorHeight = cursor.outerHeight();
    let posX = (e.pageX - $(this).offset().left) * (imgWidth / $(this).width()) - cursorWidth / 2;
    let posY = (e.pageY - $(this).offset().top) * (imgHeight / $(this).height()) - cursorHeight / 2;

    if (posX < 0) {
        posX = 0;
    }

    if (posX > (imgWidth - cursorWidth)) {
        posX = imgWidth - cursorWidth;
    }

    if (posY < 0) {
        posY = 0;
    }

    if (posY > (imgHeight - cursorHeight)) {
        posY = imgHeight - cursorHeight;
    }

    cursor.css({
        'left': e.pageX - cursorWidth / 2 + 'px',
        'top': e.pageY - cursorHeight / 2 + 'px',
    });

    let overlay = $('.zoom__images__overlay');

    overlay.css('background-image', `url(${imgBlock.attr('src')})`);
    overlay.css('background-size', (imgWidth * zoom) + 'px ' + (imgHeight * zoom) + 'px');
    overlay.css('background-position', `-${posX * zoom}px -${posY * zoom}px`);
    overlay.css('left', e.pageX - overlay.width() / 1.4 + 'px'); // Прив'язка лупи до курсора (центр курсора)
    overlay.css('top', e.pageY - overlay.height() / 1.4 + 'px'); // Прив'язка лупи до курсора (центр курсора)
    overlay.show();
    cursor.show();
});

$('.zoom__images__item').on('mouseleave', function () {
    $('.zoom__images__cursor').hide();
    $('.zoom__images__overlay').hide();
});

// *********************************//

// Отримання параметрів з URL
const urlParams = new URLSearchParams(window.location.search);
const title = urlParams.get('title');
const imageUrl = urlParams.get('imageUrl');
const price = urlParams.get('price');

// Виведення інформації про товар на сторінці
document.getElementById('productTitle').innerText = title;
document.getElementById('productImage').src = imageUrl;
document.getElementById('productPrice').innerText = `$${price}`;

// **********зміна значення покупка*************//

let quantityInput = document.getElementById('quantity');

function increment() {
    let currentValue = parseInt(quantityInput.value, 10);
    quantityInput.value = currentValue + 1;
}

function decrement() {
    let currentValue = parseInt(quantityInput.value, 10);
    if (currentValue > 0) {
        quantityInput.value = currentValue - 1;
    }
}

function addToCart() {
    // Ваш код для додавання товару в кошик з врахуванням кількості метрів
    let quantity = parseInt(quantityInput.value, 10);
    // Решта логіки...
}

