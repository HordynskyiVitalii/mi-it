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


