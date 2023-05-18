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

const imageContainers = document.querySelectorAll('.image-block');

imageContainers.forEach(imageContainer => {
    const image = imageContainer.querySelector('img');
    const overlay = imageContainer.querySelector('.overlay');

    imageContainer.addEventListener('mouseenter', () => {
        const overlayHeight = overlay.offsetHeight;
        image.style.transform = `translateY(-${overlayHeight}px)`;
    });

    imageContainer.addEventListener('mouseleave', () => {
        image.style.transform = 'translateY(0)';
    });
});

const counters = document.querySelectorAll('.counter');
const likeButtons = document.querySelectorAll('.like-button');

for (let i = 0; i < likeButtons.length; i++) {
    let count = 0;
    let liked = false;

    likeButtons[i].addEventListener('click', () => {
        if (!liked) {
            count++;
            liked = true;
            counters[i].textContent = count;
            likeButtons[i].classList.add('liked');
        } else {
            count--;
            liked = false;
            counters[i].textContent = count;
            likeButtons[i].classList.remove('liked');
        }
    });
}