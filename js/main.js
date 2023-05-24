$('.banner__slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

if (document.querySelectorAll('.info__block-element').length > 3) {
    const elements = document.querySelectorAll('.info__block-element');

    elements.forEach((element) => {
        element.style.margin = '0';
    });
}

$('.share__caption-slider').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
});

$('.future__caption-slider').slick({
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

const FooterEmail = document.getElementById('footer__form-email')

function validateFooterEmail() {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(FooterEmail.value.trim())) {
        FooterEmail.style.border = '1px solid red';
        FooterEmail.style.boxShadow = 'inset 0 0 5px red';
        return false;
    } else {
        FooterEmail.style.border = '';
        FooterEmail.style.boxShadow = '';
        return true;
    }
}
function validateForm() {
    const validEmail = validateFooterEmail();
    return validEmail;
}

document.querySelector('#footer__form-button').addEventListener('click', function (event) {
    if (!validateForm()) {
    }
});

function smoothScroll(event, target) {
    event.preventDefault();
    const element = document.getElementById(target);
    const offsetTop = element.offsetTop;
    const offsetHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const distance = offsetTop - ((windowHeight - offsetHeight) / 2);
    window.scroll({
        top: distance,
        left: 0,
        behavior: 'smooth'
    });
}