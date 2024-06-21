
    const accordionBtns = document.querySelectorAll(".footer_link");
    accordionBtns.forEach((accordion) => {
        if(accordion) {
            accordion.addEventListener("click", function() {
                var link = this.getAttribute("data-title");
                this.classList.toggle("active-link");
                var ul = document.querySelector("." +link);
                ul.classList.toggle("active");
                var active_links = document.querySelectorAll(".footer_link.active-link");
                for (var i=0; i< active_links.length;i++){
                    if(active_links[i] != accordion) {
                        active_links[i].classList.remove("active-link");
                        active_links[i].nextElementSibling.classList.remove("active");
                    }
                }
            })
        }
    })
    const curencyselector = document.querySelector(".Footer__LocalizationItem #footer-currency-popover"),
          selector =  document.querySelector(".Footer__LocalizationItem .SelectButton"),
          overlay =  document.querySelector("#overlay");

    selector.addEventListener("click", function() {
        if(this.getAttribute('aria-expanded') == 'true'){
            this.setAttribute('aria-expanded', 'false')
            curencyselector.setAttribute('aria-hidden', 'true')
        } else if(this.getAttribute('aria-expanded') == 'false'){
            this.setAttribute('aria-expanded', 'true')
            curencyselector.setAttribute('aria-hidden', 'false')
        }
        document.body.classList.toggle("no_scroll");

       overlay.classList.toggle("overlay-active");
       overlay.addEventListener("click", function(){
            selector.setAttribute('aria-expanded', 'false');
            curencyselector.setAttribute('aria-hidden', 'true');
            overlay.classList.remove("overlay-active");
            document.body.classList.remove("no_scroll")
        })
        document.querySelector(".Popover__Close [data-action=close-popover]").addEventListener("click", function(){
            selector.setAttribute('aria-expanded', 'false');
            curencyselector.setAttribute('aria-hidden', 'true');
            overlay.classList.remove("overlay-active");
            document.body.classList.remove("no_scroll")
        })
    })