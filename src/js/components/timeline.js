    var swiperThumbnails = new Swiper('.Timeline-year', {
        spaceBetween: 0,
        slidesPerView: 'auto',
        resistanceRatio: 0.6,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    });
    setTimeout(function(){
        var swiperGallery = new Swiper('.Timeline-items-main', {
            spaceBetween: 10,
            simulateTouch: true,
            preloadImages: false,
            autoHeight: true,
            effect: "fade",
            navigation: {
                nextEl: '.next-btn',
                prevEl: '.prev-btn'
            },
            fadeEffect: {
                crossFade: true
            },
            speed: 300,
            thumbs: {
                swiper: swiperThumbnails
            }
        });
    }, 500);
    



    const sliders1 = document.querySelectorAll(".Timeline-image-items");
    if (sliders1.length) {
       sliders1.forEach(function(el, index) {
           el.classList.add(`s${index}`)
           var swipers = new Swiper(`.Timeline-image-items.s${index}`, {
               slidesPerView: '1',
               paginationClickable: true,
               autoHeight: false,
               freeMode: false,
               loop: false,
               spaceBetween: 20,
               observer: true,
                observeParents: true,
               navigation: {
                nextEl: `.timeline-item-image-next`,
                prevEl: `.timeline-item-image-prev`
                },
                pagination: {
                    el: '.timeline-item-image-pagination',
                    dynamicBullets: true,
                    clickable: true,
                    dynamicMainBullets: 0
                },
                on: {
                    slideChange: function () {
                        var pages = el.querySelectorAll(".timeline-item-image-pagination");
                        // pages.forEach(function(page){
                        //     page.classList.add("reachbetween");
                        // })
                        if (this.isBeginning) {
                            console.log("reached start")
                            pages.forEach(function(page){
                                page.classList.remove("reachbetween");
                            })
                        }else {
                            if (this.isEnd) {
                                pages.forEach(function(page){
                                    page.classList.remove("reachbetween");
                                    page.classList.add("reachend");
                                });
                            } else {
                                pages.forEach(function(page){
                                    page.classList.remove("reachend");
                                    page.classList.add("reachbetween");
                                });
                            }
                        }
                    },
                }
            })
           if(el) {
               var length = el.querySelectorAll(`.Timeline-image-items.s${index} .swiper-slide`).length;
               if(length <= 1) {
                   swipers.destroy();
                   el.querySelector('.timeline-item-image-next').classList.add('hide');
                   el.querySelector('.timeline-item-image-prev').classList.add('hide');
               }
           }
       });
    }
