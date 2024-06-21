
    var doc = document.documentElement;
    var w = window;
    var prevScroll = w.scrollY || doc.scrollTop;
    var curScroll;
    var direction = 0;
    var prevDirection = 0;
    var header = document.querySelector('.nav-header');
    var announcement = document.querySelector("#shopify-section-announcement-bar");
    var header__inner = header.querySelector('#menol-section-header');
    var hold = header.offsetHeight;
    var toggled;
    var checkScrolling = function() {
        curScroll = w.scrollY || doc.scrollTop;
        if (curScroll <= 0) {
            header.classList.remove("scrolled-down-at-middle");
            if(announcement) {
                header.classList.remove("scrolled-down-with-announcement");
            }
            header.classList.remove("scrolled-within");
            return;
        }
        if (curScroll > prevScroll) {
            direction = 2;
            header.classList.remove("scrolled-down-at-middle");
            if(announcement) {
                header.classList.remove("scrolled-down-with-announcement");
            }
            header.classList.remove("scrolled-within");
            header.classList.add("scrolled-up");
        } else if (curScroll < prevScroll && !(curScroll < hold)) {
            direction = 1;
            header.classList.add("scrolled-down-at-middle");
            if(announcement) {
                header.classList.add("scrolled-down-with-announcement");
            }
            header.classList.remove("scrolled-within");
            header.classList.remove("scrolled-up");
        }
        if (direction !== prevDirection) {
            toggled = toggleNav()
        }
        if (toggled) {
            prevDirection = direction;
        }
        prevScroll = curScroll;
        if(window.scrollY) {
            header__inner.classList.add('mobile_sticky');
        } else {
            header__inner.classList.remove('mobile_sticky');
        }
    };
    var toggleNav = function() {
        toggled = true;
        if (direction === 2 && curScroll < hold) {
                // header.classList.add("scrolled-down-at-middle");
                header.classList.add("scrolled-within");
                header.classList.remove("scrolled-up");
        } else if (direction === 1) {
            //scroll up
        } else {
            toggled = false;
        }
        return;
    };
    const header_h = document.querySelector('.nav-header').offsetHeight;
    if(document.body.classList.contains("white-header")){
        main.style.paddingTop = header_h +"px";
        window.addEventListener('resize', function() {
            const h_header = document.querySelector('.nav-header').offsetHeight;
           main.style.paddingTop = h_header +"px";
        })
    }

    window.addEventListener('scroll', checkScrolling);

