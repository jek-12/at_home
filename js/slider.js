

    let swiper_f = new Swiper('.service_slider', {
        slidesPerView: 4,
        spaceBetween: 80,
        slidesPerGroup: 1,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            740: {
                spaceBetween: 30,
                slidesPerView: 3,

            },
            1100: {
                spaceBetween: 80,
                slidesPerView: 4,
            }
        }

    });

setInterval(()=> $(window).width() > 1100 ? $(".swiper-pagination").css("display", "none"):$(".swiper-pagination").css("display", "block"),100);

    let swiper_s = new Swiper('.team_slider', {
        slidesPerView: 4,
        spaceBetween: 80,
        slidesPerGroup: 1,
        loop: true,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1: {
                slidesPerView: 1,
                spaceBetween: 24,
            },
            500: {
                slidesPerView: 2,
                spaceBetween: 24,
            },
            740: {
                spaceBetween: 30,
                slidesPerView: 3,

            },
            1100: {
                spaceBetween: 80,
                slidesPerView: 4,
            }
        }

    });
