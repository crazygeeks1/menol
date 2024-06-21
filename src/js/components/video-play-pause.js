
    const videoElements1 = document.querySelectorAll('.image-video-text-one-col video');
    videoElements1.forEach((videoElement) => {
        const playpausebtn = videoElement.nextElementSibling;
        if(playpausebtn) {
            playpausebtn.addEventListener("click", function(e) {
                e.preventDefault()
                this.classList.toggle('playing');
                if (this.classList.contains('playing')) {
                    videoElement.play();
                    this.classList.add("hide");
                    this.previousElementSibling.setAttribute("controls", "true");
                }
            })
            videoElement.addEventListener('ended', () => {
                playpausebtn.classList.remove('playing', 'hide');
            });
        }
    })
    const videos = document.querySelectorAll("video");
    videos.forEach((video) => {
        video.addEventListener("timeupdate", () => {
        video.classList.add("loaded");
        }, { once: true });
    });
