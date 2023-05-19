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

$('.share--caption-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.future--caption-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

function changeImage(button) {
    button.classList.toggle('clicked');
}

var imageBlocks = document.querySelectorAll('.TWA__gallery__block');

imageBlocks.forEach(function(block) {
    var counter = block.querySelector('.TWA__gallery__block-response-likes-counter');
    var likeButton = block.querySelector('.TWA__gallery__block-response-likes-button');
    var liked = false;

    likeButton.addEventListener('click', function() {
        if (!liked) {
            var currentCount = parseInt(counter.textContent);
            var newCount = currentCount + 1;
            counter.textContent = newCount;
        } else {
            var currentCount = parseInt(counter.textContent);
            var newCount = currentCount - 1;
            counter.textContent = newCount;
        }
        liked = !liked;
    });
});
