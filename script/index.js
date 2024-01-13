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
