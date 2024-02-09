swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-container .swiper-button-next',
        prevEl: '.swiper-container .swiper-button-prev'},
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
    }
});