    let accordionItems = document.querySelectorAll('.js-accordion-item');
    if(accordionItems && accordionItems.length > 0){
      accordionItems.forEach(accordionItem => {
        let accordionTitle = accordionItem.querySelector('.js-accordion-title')
        if(!accordionTitle) return;
        accordionTitle.addEventListener('click', () => {
          accordionItems.forEach(accordion => {
            if(accordionItem == accordion){
              return
            }
            accordion.setAttribute('data-open', 'false')
          })

          if (accordionItem.getAttribute('data-open') == 'true'){
            accordionItem.setAttribute('data-open', 'false')
          } else if (accordionItem.getAttribute('data-open') == 'false') {
            accordionItem.setAttribute('data-open', 'true')
          }
        })
      })
    }

    var load_more = document.querySelector('.load-more-button');
    if(load_more) {
        load_more.addEventListener("click", function(e) {
            e.preventDefault()
            const divsArr = Array.from(accordionItems);
            divsArr.forEach(acc => {
              acc.classList.remove('hide')
            })
            this.classList.add('hide');
        })
    }

    const Image_carousel = document.querySelectorAll('.accordion-image-slider');
    if (Image_carousel.length) {
        Image_carousel.forEach(function(el, index) {
            el.classList.add(`s${index}`);
            var carousel = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](`.accordion-image-slider.s${index}`, {
                slidesPerView: 1,
                centeredSlides: true,
                paginationClickable: true,
                loop: false,
                spaceBetween: 0,
                slideToClickedSlide: true,
                mousewheel: {
                    forceToAxis: true,
                },
                navigation: {
                    nextEl: `.accordion-image-slider.s${index} .swiper-slider-button-next`,
                    prevEl: `.accordion-image-slider.s${index} .swiper-slider-button-prev`,
                }
            })
            if(el) {
                var length = el.querySelectorAll(`.accordion-image-slider.s${index} .swiper-slide`).length;
                var arrows =  el.querySelectorAll(`.accordion-image-slider.s${index} .swiper-button-lock`);
                if(length <= 1) {
                    carousel.destroy();
                }
                if(length == 1) {
                  arrows.forEach(arrow => {
                    arrow.classList.add('hide');
                  })
                }
            }
        })
    }