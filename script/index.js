document.addEventListener('DOMContentLoaded', function () {
    const unlockMenuBtn = document.getElementById('burger');
    const closeMenuBtn = document.querySelector('.mobBtn');
    const menuMob = document.querySelector('.menu__mob');

    if (closeMenuBtn) {
        closeMenuBtn.addEventListener('click', function () {
            menuMob.style.display = 'none';
        });
    }

    if (unlockMenuBtn) {
        unlockMenuBtn.addEventListener('click', function () {
            menuMob.style.display = 'block';
        });
    }
});

$(document).ready(function () {
    $('.slider').slick({
        arrows:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        autoplay:true,
        autoPlaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotHover:true,
    });
});

$(document).ready(function () {
    $('.card__images').slick({
        arrows:true,
        slidesToShow:1,
        slidesToScroll:1,
        speed:1000,
        autoplay:true,
        autoPlaySpeed:1500,
        pauseOnFocus:true,
        pauseOnHover:true,
        pauseOnDotHover:true,
    });
});

document.addEventListener('DOMContentLoaded', function () {
    var slickPrev = document.querySelector('.slick-prev');
    var slickNext = document.querySelector('.slick-next');

    if (slickPrev && slickNext) {
        slickPrev.style.display = 'none';
        slickNext.style.display = 'none';
    }
});

// *************************

document.addEventListener("DOMContentLoaded", function() {
    const fakeWindow = document.querySelector(".fake__window");

    function getRandomPosition() {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const randomLeft = Math.floor(Math.random() * 20); // 20 - відстань від лівого краю
        const randomTop = Math.floor(screenHeight - 50 - Math.random() ); // 20 - відстань від нижнього краю, 80 - висота блоку

        return { left: randomLeft, top: randomTop };
    }

    function showRandomSection() {
        const position = getRandomPosition();
        fakeWindow.style.transition = "left 1s ease-in-out, top 1s ease-in-out"; // Увімкнемо перехід
        fakeWindow.style.left = `${position.left}px`;
        fakeWindow.style.top = `${position.top}px`;

        fakeWindow.style.display = "block"; // Показуємо секцію

        setTimeout(() => {
            fakeWindow.style.display = "none"; // Ховаємо секцію після 5 секунд
            setTimeout(showRandomSection, getRandomInterval()); // Запускаємо знову через випадковий інтервал
        }, 1000);
    }

    function getRandomInterval() {
        return Math.floor(Math.random() * (30000 - 15000) + 15000); // Випадковий інтервал від 15 до 30 секунд
    }

    // Початковий запуск
    setTimeout(showRandomSection, getRandomInterval());
});




