
    var main = document.querySelector('main');
    var first_child = main.firstElementChild;
    var hasChild = first_child.querySelectorAll(".video-controls");
    if(hasChild != null ) {
        function controlhide() {
            for(var i=0;i<= hasChild.length;i++){
                if (window.innerWidth <= 768) {
                    if(hasChild[i]) {
                        hasChild[i].classList.add("first-video-control");
                    }
                } else {
                    if(hasChild[i]) {
                        hasChild[i].classList.remove("!hidden");
                    }
                }
            }
        }
        controlhide ()
        window.addEventListener('resize', controlhide);
    }