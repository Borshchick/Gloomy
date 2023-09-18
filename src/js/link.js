$(document).ready(function() {
    // Перевіряємо, чи є якірний посил в URL
    if (window.location.hash) {
        var target = $(window.location.hash);

        // Перевіряємо, чи існує цільовий розділ
        if (target.length) {
            // Виконуємо плавну прокрутку навіть якщо користувач знаходиться внизу сторінки
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 3000); // Плавна прокрутка триває 1 секунду
        }
    }
});

