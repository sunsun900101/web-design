var swiper = new Swiper('.headerSwiper', {
    
    loop: true,

    slidesPerView: 1,

    spaceBetween: 0,

    hashNavigation: {
        watchState: true,
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});