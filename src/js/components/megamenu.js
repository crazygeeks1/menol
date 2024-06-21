
    var links = document.querySelectorAll(".megamenu-link");
    var menuitems = document.querySelectorAll(".mega_menu_item");
    links.forEach((link) => {
        if(link){
            link.addEventListener("mouseover", function(){
                document.querySelector(".header").classList.remove("header-white");
                var menu_anchor = link.getAttribute('data-link-desk').trim();
                var showMegaMenu = false;
                var currentMegaMenu = '';
                this.classList.add('active');
                if(link.classList.contains('href-link')) {
                    // document.querySelector("body").classList.remove("menu-active");
                    links.forEach(function(el){
                        el.classList.remove('active');
                    });
                }

                menuitems.forEach((menuitem) => {
                    var menuid = menuitem.getAttribute("data-menu-handle").trim();
                    if(menu_anchor == menuid){
                        if (menuitem.classList.contains('hide')) {
                            showMegaMenu = true;
                            currentMegaMenu = menuitem;
                            document.querySelector("body").classList.add("menu-active");
                        }
                    }
                    else {
                        menuitem.classList.add("hide");

                    }
                });

                if (showMegaMenu) {
                    links.forEach(function(el){
                        el.classList.remove('active');
                    });
                    document.querySelector(".header").classList.add("header-white");
                    link.classList.add('active');
                    currentMegaMenu.classList.remove("hide");
                } else {
                    // links.forEach(function(el){
                    //     el.classList.remove('active');
                    // });
                    // document.querySelector(".header").classList.remove("header-white");
                }
                if(!showMegaMenu) {
                    document.querySelector("body").classList.remove("menu-active");
                     links.forEach(function(el){
                        el.classList.remove('active');
                    });
                    menuitems.forEach((menuitem) => { menuitem.classList.add('hide') })
                    document.querySelector(".header").classList.remove("header-white");
                }
            });
        }
    })
    menuitems.forEach((menuitem) => {
        if(menuitem){
            menuitem.addEventListener("mouseleave", function(){
                menuitem.classList.add("hide");
                document.querySelector(".header").classList.remove("header-white");
                links.forEach(function(el){
                    el.classList.remove('active');
                });
                document.querySelector("body").classList.remove("menu-active");

            })
            window.addEventListener('resize', function(event){
                var newWidth = window.innerWidth;
                if(newWidth < 1024){
                    menuitem.classList.add("hide");
                }
            });
        }
    });

    const sliders = document.querySelectorAll(".megamenu-slider-desktop");
    if (sliders.length) {
       sliders.forEach(function(el, index) {
           el.classList.add(`s${index}`)
           var swipers = new Swiper(`.megamenu-slider-desktop.s${index}`, {
               pagination: '.swiper-pagination',
               slidesPerView: 'auto',
               paginationClickable: true,
               freeMode: true,
               loop: false,
               spaceBetween: 20,
               mousewheel: {
                   forceToAxis: true,
               }
           })
           if(el) {
               var length = el.querySelectorAll(`.megamenu-slider-desktop.s${index} .swiper-slide`).length;
               if(length <= 3) {
                   swipers.destroy();
                   el.style.paddingRight = '3.75rem';
                   el.querySelector(".swiper-wrapper").classList.add("grid","grid-cols-6","gap-x-10");
                   if(length == 3) {
                       el.querySelectorAll(".swiper-slide").forEach((slide) => slide.classList.add("col-span-2"));
                   }
                   else {
                       el.querySelectorAll(".swiper-slide").forEach((slide) => slide.classList.add("col-span-3"));
                   }
               }
           }
       });
    }

    //Mobile Menu
    var menuicon = document.querySelector(".mobile-menu-icon");
    var menudrawer = document.querySelector(".mobile-nav-wrapper");
    if(menuicon) {
        menuicon.addEventListener("click", function(){
            menudrawer.classList.add("active");
            document.querySelector(".header-main-menu").classList.add("hidden");
            document.querySelector("body").classList.add("menu-active");
            document.querySelector("body").classList.add("overflow-hidden");
        });
        var mobilemenulinks = document.querySelectorAll(".menu-link");
        mobilemenulinks.forEach((mobilemenulink) => {
            var menuid = mobilemenulink.getAttribute('mobile-menu').trim();
            var megamenuitems = document.querySelectorAll(".mega_menu_item_mobile");
            megamenuitems.forEach((megamenuitem) => {
                var megamneuid = megamenuitem.getAttribute('list-item-mobile').trim();
                if(megamneuid == menuid) {
                    var megamenu_title = mobilemenulink.dataset.menu_title;
                    if(megamenuitem.classList.contains('no_menu_link')) {
                        var hide_image = megamenuitem.dataset.hide_image.trim() ;
                        if(hide_image === 'true') {
                            megamenuitem.remove()
                        }
                        megamenuitem.querySelector('.menu-link-text').innerText = megamenu_title;
                    }
                }
            })
        })
    }

    var closemenu = menudrawer.querySelector(".close-menu");
    var link_click = document.querySelectorAll(".link-drawer");
    if(closemenu) {
        closemenu.addEventListener("click", function() {
            menudrawer.classList.remove("active");
            document.querySelector(".header-main-menu").classList.remove("hidden");
            document.querySelector("body").classList.remove("menu-active");
            document.querySelector("body").classList.remove("overflow-hidden");
        });
        window.addEventListener('resize', function(event) {
            var newWidth = window.innerWidth;
            if(newWidth > 1024) {
                menudrawer.classList.remove("active");
                document.querySelector(".header-main-menu").classList.remove("hidden");
                document.querySelector("body").classList.remove("menu-active");
                document.querySelector("body").classList.remove("overflow-hidden");
            }
        })
        document.querySelector("#overlay").addEventListener("click", function() {
            if(document.querySelector("body").classList.contains("menu-active")) {
                menudrawer.classList.remove("active");
                document.querySelector(".header-main-menu").classList.remove("hidden");
                document.querySelector("body").classList.remove("menu-active");
                document.querySelector("body").classList.remove("overflow-hidden");
            }
        })
        link_click.forEach((links) => {
            if(links) {
                links.addEventListener("click", function() {
                    menudrawer.classList.remove("active");
                    document.querySelector(".header-main-menu").classList.remove("hidden");
                    menudrawer.classList.remove("active");
                    document.querySelector(".header-main-menu").classList.remove("hidden");
                    document.querySelector("body").classList.remove("menu-active");
                    document.querySelector("body").classList.remove("overflow-hidden");
                });
            }
        });
    }

    var menu_items = document.querySelectorAll(".mega_menu_item_mobile");
    menu_items.forEach((menu_item) => {
        var hasMenu = menu_item.getAttribute('list-item-mobile');
        var main_link = document.querySelector('.menu-link[mobile-menu='+ hasMenu +']');
        if(main_link) {
            main_link.querySelector('span').classList.remove('hide');
        }
    });

    var mobilemenulinks = document.querySelectorAll(".menu-link");
    mobilemenulinks.forEach((mobilemenulink) => {
        if(mobilemenulink) {
           var linkhrefs = mobilemenulink.querySelectorAll(".link--menu-main");
           linkhrefs.forEach((linkhref) => {
               linkhref.addEventListener("click", function(e){
               var attr = linkhref.getAttribute("href");
                   if(attr == "#"){
                       e.preventDefault();
                   }
                   else {
                        menudrawer.classList.remove("active");
                        document.querySelector(".header-main-menu").classList.remove("hidden");
                        document.querySelector("body").classList.remove("menu-active");
                        document.querySelector("body").classList.remove("overflow-hidden");
                    }
               })
           })
           mobilemenulink.addEventListener("click", function() {
               var menuid = mobilemenulink.getAttribute('mobile-menu').trim();
               var megamenuitems = document.querySelectorAll(".mega_menu_item_mobile");
                megamenuitems.forEach((megamenuitem) => {
                    var megamneuid = megamenuitem.getAttribute('list-item-mobile').trim();
                    if(megamneuid == menuid) {
                        var megamenu_title = mobilemenulink.dataset.menu_title;
                        if(megamenuitem.classList.contains('no_menu_link')) {
                            megamenuitem.querySelector('.menu-link-text').innerText = megamenu_title;
                        }
                        var main_menu = document.querySelector(".mobile-main-menu");
                        var menu_width = main_menu.offsetWidth;
                        megamenuitem.classList.remove("hidden");
                        main_menu.style.marginLeft = `-${menu_width}px`;
                        window.addEventListener('resize', function(){
                            var menu_width = main_menu.offsetWidth;

                            console.log(menu_width)
                            main_menu.style.marginLeft = `-${menu_width}px`;
                        });

                        megamenuitem.classList.add("inline-block");
                        megamenuitem.querySelector(".back-menu").addEventListener("click", function() {
                            var main_menu = document.querySelector(".mobile-main-menu");
                            megamenuitem.classList.add("hidden");
                            megamenuitem.classList.remove("inline-block");
                            main_menu.style.marginLeft = "0";
                        })
                    }
                })
            })
        }
    });
    const mobileEl = document.querySelectorAll('.mobile-menu-slider');
    mobileEl.forEach(function(el, index) {
        el.classList.add(`s${index}`);
        const mobileSwiper = new Swiper(`.mobile-menu-slider.s${index}`, {
            pagination: `.mobile-menu-slider.s${index} .swiper-pagination`,
            slidesPerView: '1.352',
            slidesPerGroup: 1,
            paginationClickable: true,
            spaceBetween: 15,
            loop: false,
            nextButton: `.mobile-menu-slider.s${index} .swiper-button-next`,
            prevButton: `.mobile-menu-slider.s${index} .swiper-button-prev`,
        });

        if(el) {
            var length = el.querySelectorAll(`.mobile-menu-slider.s${index} .swiper-slide`).length;
            if(length < 2) {
                mobileSwiper.destroy();
            }
        }
    });

