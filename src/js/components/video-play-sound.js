
    const videoElements2 = document.querySelectorAll('.banner-item video');
    videoElements2.forEach((videoElement) => {
        const playpausebtn = videoElement.nextElementSibling;
        const soundbtn = playpausebtn.querySelector(".lv-video-loop__sound-button");
        const soundoff = soundbtn.querySelector(".sound-off");
        const soundon = soundbtn.querySelector(".sound-on");
        const videobtn = playpausebtn.querySelector(".lv-play-pause-button");
        const videooff = videobtn.querySelector(".video-off"); 
        const videoon = videobtn.querySelector(".video-on");
        if (soundbtn) {
            soundbtn.addEventListener("click", function(e) {
                e.preventDefault()

                if (videoElement.muted) {
                    document.querySelectorAll('video').forEach((otherVideo) => {
                        if (otherVideo != videoElement) {
                            otherVideo.muted = true;
                            const otherSoundButtons = otherVideo.querySelector(".lv-video-loop__sound-button");
                            if (otherSoundButtons) {
                                otherSoundButtons.querySelector(".sound-off").classList.remove("hidden");
                                otherSoundButtons.querySelector(".sound-on").classList.add("hidden");
                            }
                        }
                    });
                    videoElement.muted = !videoElement.muted;
                    soundon.classList.remove("hidden");
                    soundoff.classList.add("hidden");
                    videoElement.removeAttribute("muted");
                    this.classList.add('playing');
                } else {
                    videoElement.muted = true;
                    soundon.classList.add("hidden");
                    soundoff.classList.remove("hidden");
                    videoElement.setAttribute("muted" , "true");
                    this.classList.remove('playing');
                }
            })
        }
        if (videobtn) {
            videobtn.addEventListener("click", function(e) {
                e.preventDefault()
                if (this.classList.contains('playing')) {
                    videoElement.play();
                    videoon.classList.add("hidden");
                    videooff.classList.remove("hidden");
                    this.classList.remove('playing');
                } else {
                    videoon.classList.remove("hidden");
                    videooff.classList.add("hidden");
                    this.classList.add('playing');
                    videoElement.pause();
                }
            })
        }
        if(window.innerWidth <= 768) {
            /*if (videoElement.paused) {
                console.log('Video is paused');
                videoon.classList.remove("hidden");
                videooff.classList.add("hidden");
                videobtn.classList.add('playing');
            }*/
        }
    })
