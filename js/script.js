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


$(function () {
    const $home = $('.home');

    if ($home.length > 0) {
        const observer = new IntersectionObserver( (entries) => {

            const isVisble = entries[0].isIntersecting;

            $home.toggleClass('is-visible', isVisble);
            
        },

        {
            threshold: 0,
            rootMargin: '-35% 0px -35% 0px',
        }
    );
        observer.observe($home[0]);
    }


    const $products = $('.products-heading');

    if ($products.length > 0) {
        const observer = new IntersectionObserver( (entries) => {

            const isVisble = entries[0].isIntersecting;

            $products.toggleClass('is-visible', isVisble);
            
        },

        {
            threshold: 0
        }
    );
        observer.observe($products[0]);
    }




    const $magazineAbout = $('.magazine-about');

    if ($magazineAbout.length > 0) {

        const observer = new IntersectionObserver((entries) => {

            const isVisible = entries[0].isIntersecting;

            $magazineAbout.toggleClass('is-visible', isVisible);

        }, {
            threshold: 0,
            rootMargin: '-35% 0px -35% 0px',
        });

        observer.observe($magazineAbout[0]);
    }

});