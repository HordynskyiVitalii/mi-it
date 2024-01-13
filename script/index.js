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