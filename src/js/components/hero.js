
    const carouselItems = document.querySelectorAll('.js-banner-items');
    if (carouselItems.length) {
        carouselItems.forEach(function(el, index) {
            el.classList.add('s' + index);
            if (el.dataset.slides < 2) {
                el.querySelectorAll('.arrows').forEach(function(els) {
                    els.style.display = 'none';
                });
                return;
            }
            new Swiper('.js-banner-items.s' + index, {
                slidesPerView: 1,
                autoHeight: true,
                freeMode: true,
                initialSlide: 0,
                effect: 'fade',
                navigation: {
                    nextEl: '.js-banner-items.s' + index + ' .swiper-button-next',
                    prevEl: '.js-banner-items.s' + index + ' .swiper-button-prev',
                },
                mousewheel: {
                    forceToAxis: true,
                },
                breakpoints: {
                    0: {
                        freeMode: false,
                    },
                },
                preloadImages: false,
                autoplay: el.dataset.autoplay == 'true' ? { delay: parseInt(el.dataset.speed) } : false,
                pagination: {
                    el: '.js-banner-items.s' + index + ' .swiper-pagination',
                    clickable: true,
                },
                on: {
                    slideChangeTransitionStart: function(els) {
                        var desktop_video, tablet_video, mobile_video;
                        if (window.innerWidth > 1024) {
                            if (el.querySelector('.swiper-slide-active').classList.contains('desktop-video')) {
                                desktop_video = el.querySelector('.swiper-slide-active').querySelector('.desk__video');
                                if (desktop_video) desktop_video.play();
                            } else {
                                el.querySelectorAll('.swiper-slide .desk__video').forEach(function(_vid) {
                                    _vid.pause();
                                });
                            }
                        }

                        if (window.innerWidth > 768 && window.innerWidth < 1025) {
                            if (el.querySelector('.swiper-slide-active').classList.contains('tablet-video')) {
                                tablet_video = el.querySelector('.swiper-slide-active').querySelector('.tab__video');
                                if (tablet_video) tablet_video.play();
                            } else {
                                el.querySelectorAll('.swiper-slide .tab__video').forEach(function(_vid) {
                                    _vid.pause();
                                });
                            }
                        }

                        if (window.innerWidth < 769) {
                            if (el.querySelector('.swiper-slide-active').classList.contains('mobile-video')) {
                                mobile_video = el.querySelector('.swiper-slide-active').querySelector('.mob__video');
                                if (mobile_video) mobile_video.play();
                            } else {
                                el.querySelectorAll('.swiper-slide .mob__video').forEach(function(_vid) {
                                    _vid.pause();
                                });
                            }
                        }
                    },
                },
            });
        });
    }

    var firstsec = document.querySelectorAll('.history_hero');
    firstsec.forEach(function(hero) {
        var next_element = hero.nextElementSibling;
        var bounce = hero.querySelector('.bounce-svg');
        bounce.addEventListener('click', function() {
            next_element.scrollIntoView({ behavior: 'smooth' });
        });
    });

    var sections = document.querySelectorAll('.shopify-section.hero-banner_homepage');
    if (sections.length) {
        sections.forEach(function(section) {
            var top = section.getBoundingClientRect().top;
            if (top <= 100) {
                var view_text = section.querySelector('.fade-in');
                if (view_text) {
                    view_text.querySelector('.banner__content').classList.remove('fadeInUp');
                    view_text.classList.add('fade-in-down');
                }
            }
            document.addEventListener('scroll', reveal);

            function reveal() {
                const getNumbers = function(min, max) {
                    return Array.from({ length: max - min + 1 }, function(_, i) {
                        return min + i;
                    });
                };
                var top = section.getBoundingClientRect().top;
                var a = getNumbers(-200, 100);
                for (var i = 0; i <= a.length; i++) {
                    if (top <= a[i]) {
                        var view_text = section.querySelector('.fade-in');
                        if (view_text) {
                            view_text.querySelector('.banner__content').classList.remove('fadeInUp');
                            view_text.classList.add('fade-in-down');
                        }
                    }
                }
            }
        });
    }

