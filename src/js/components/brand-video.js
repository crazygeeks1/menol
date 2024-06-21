
    const videoElements = document.querySelectorAll('.brand-video-section video');
    videoElements.forEach((videoElement) => {
        const playpausebtn = videoElement.nextElementSibling;
        if(playpausebtn) {
            playpausebtn.addEventListener("click", function(e) {
                e.preventDefault()
                this.classList.toggle('playing');
                if (this.classList.contains('playing')) {
                    videoElement.play();
                    this.classList.add("hide");
                    const audio_btn = playpausebtn.nextElementSibling;
                    audio_btn.classList.remove("hide");
                    audio_btn.addEventListener("click", function(){
                        if (videoElement.muted) {
                            // videoElement.muted = false;
                            this.querySelector('.video-control-symbol').textContent = "MUTE"
                            videoElement.muted = !videoElement.muted;

                        } else {
                            this.querySelector('.video-control-symbol').textContent = "UNMUTE"
                            videoElement.muted
                            videoElement.muted = true;
                        }
                        return;
                    })
                    this.previousElementSibling.setAttribute("controls", "true");
                }
            })
            videoElement.addEventListener('ended', () => {
                playpausebtn.classList.remove('playing', 'hide');
                const audio_btn = playpausebtn.nextElementSibling;
                audio_btn.classList.add("hide");
                audio_btn.addEventListener("click", function(){
                    if (videoElement.muted) {
                        videoElement.muted = !videoElement.muted;
                        this.querySelector('.video-control-symbol').textContent = "MUTE"
                    } else {
                        videoElement.muted
                        videoElement.muted = true;
                        this.querySelector('.video-control-symbol').textContent = "UNMUTE"
                    }
                })
            });
        }
    })