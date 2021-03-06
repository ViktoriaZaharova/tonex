$(document).ready(function () {

    // hidden list > 4
    $('.filter-box .list-checkbox').each(function () {
        if ($(this).find('li').length > 4) {
            $(this).find('li').slice(4).hide();
            $(this).parent('.block-hidden').append('<a href="#" class="btn btn-more">\n' +
                '                            <span class="text">Показать еще 10</span><span class="icon"><img src="img/arrow-bottom.png"\n' +
                '                                                                                             alt=""></span>\n' +
                '                        </a>');
        }
    });
    // hidden list > 4

    // show list all
    $('.btn-more').on('click', function (e) {
        e.preventDefault();
        $('.list-checkbox li:hidden').slice(0, 10).slideDown();
        var onBlock = $('.list-checkbox:hidden').length;
        if (onBlock <= 0) {
            $('.btn-more').hide();
        }
    });
    // show list all


    // hidden list > 6
    $('.section-reviews .reviews-wrapper').each(function () {
        if ($(this).find('.reviews-box').length > 6) {
            $(this).find('.reviews-box').slice(6).hide();
        }
    });
    // hidden list > 6

    // show list all
    $('.section-reviews .load-more').on('click', function (e) {
        e.preventDefault();
        $('.section-reviews .reviews-wrapper .reviews-box:hidden').slice(0, 4).slideDown();
        var onBlock = $('.reviews-box:hidden').length;
        if (onBlock <= 0) {
            $('.section-reviews .load-more').hide();
        }
    });
    // show list all


    // hidden list > 8
    $('.news .news-wrapper').each(function () {
        if ($(this).find('.news-box, .sale-box').length > 8) {
            $(this).find('.news-box, .sale-box').slice(8).hide();
        }
    });
    // hidden list > 8

    // hidden list > 3
    $('.blog-page__content').each(function () {
        if ($(this).find('.blog-page__box').length > 3) {
            $(this).find('.blog-page__box').slice(3).hide();
        }
    });
    // hidden list > 3

    // hidden list > 6
    $('.cabinet-message__wrapper').each(function () {
        if ($(this).find('.cabinet-message__line').length > 6) {
            $(this).find('.cabinet-message__line').slice(6).hide();
        }
    });
    // hidden list > 6

    // show list all
    $('.news .load-more').on('click', function (e) {
        e.preventDefault();
        $('.news .news-wrapper .news-box:hidden, .news .news-wrapper .sale-box:hidden').slice(0, 4).slideDown();
        var onBlock = $('.news-box:hidden, .news .news-wrapper .news-box:hidden').length;
        if (onBlock <= 0) {
            $('.news .load-more').hide();
        }
    });

    $('.blog-page__content .load-more').on('click', function (e) {
        e.preventDefault();
        $('.blog-page__content .blog-page__box:hidden').slice(0, 2).slideDown();
        var onBlock = $('.blog-page__box:hidden').length;
        if (onBlock <= 0) {
            $('.blog-page__content .load-more').hide();
        }
    });

    $('.cabinet-message__wrapper .load-more').on('click', function (e) {
        e.preventDefault();
        $('.cabinet-message__wrapper .cabinet-message__line:hidden').slice(0, 2).slideDown();
        var onBlock = $('.cabinet-message__line:hidden').length;
        if (onBlock <= 0) {
            $('.cabinet-message__wrapper .load-more').hide();
        }
    });
    // show list all

    $('.filter-box__title').on('click', function () {
        $(this).toggleClass('edit').siblings('.block-hidden').slideToggle();
    });

    $('.list-services li a').click(function () {
        $(this).toggleClass('active');
    });


    // slider

    $('.brands-slider').slick({
        dots: false,
        arrows: false,
        autoplay: true,
        slidesToShow: 8,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 7
                }
            }
        ]
    });

    $('.product-slider').slick({
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        appendArrows: '.product-slider__navigation',
        appendDots: '.product-slider__navigation',
        slidesToShow: 3
    });

    $('.compatibility-slider').slick({
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>',
        slidesToShow: 6,
        appendArrows: '.arrows-wrapper'
    });


    $('[data-fancybox="images"]').fancybox();

    $('.question-title').on('click', function () {
        $(this).toggleClass('on').siblings().slideToggle();
    });

    $('.mCustomScrollbar').mCustomScrollbar({
        alwaysShowScrollbar: 2,
        autoDraggerLength: false,
        scrollButtons: {
            enable: true,
            scrollType: "stepped"
        }
    });

    $('.table-order__drop-line .table-body__line-head').on('click', function () {
        $(this).toggleClass('open').siblings('.orders-wrapper').slideToggle();
    });

    $('.dropdown').on('click', function () {
        $(this).siblings('.dropdown-menu').slideToggle();
    });

    $('.cabinet-library__box-name').on('click', function () {
        $(this).toggleClass('open').siblings('.block-hidden').slideToggle();
    });

    $('.address-formation__new').on('click', function () {
       $(this).find('.summary-information').toggleClass('open');
    });

});
