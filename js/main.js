$('.banner--slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

if (document.querySelectorAll('.info--block-element').length > 3) {
    const elements = document.querySelectorAll('.info--block-element');

    elements.forEach((element) => {
        element.style.margin = '0';
    });
}