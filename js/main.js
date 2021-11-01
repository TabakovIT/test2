$(function(){

    $(".menu a, .footer__copy a, a.scroll__top").on("click", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),

            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });

    $(document).scroll(function(e) {
        $(window).scrollTop() > 100 ? $('.header__top').addClass('nav__color') : $('.header__top').removeClass('nav__color');
    });

    $('.slidrbloks').slick({
        dots: true,
        prevArrow: false,
        nextArrow: false,
    });

    $('.menu__btn, .menu a').on('click', function (){
        $('.header__top-inner').toggleClass('header__top-inner-active');
    });



    var mixer = mixitup('.portfolio__content');
    var containerEl = document.querySelector('.portfolio__content');
});