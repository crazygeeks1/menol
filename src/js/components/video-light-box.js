    
    // console.log("videoLightBox")
    var video_lightboxes = document.querySelectorAll(".video-light-box-items");
    video_lightboxes.forEach((lightbox) => { 
        // console.log(lightbox, 'video_lightboxes')
        lightbox.addEventListener('click', function() {
            var block_id = this.dataset.block_id.trim();
            // console.log(block_id)
            var video_popups = document.querySelectorAll('.video-item');
           
            video_popups.forEach((video_popup) => {
                
                var popup_id = video_popup.dataset.block_video.trim();
                if(block_id == popup_id ){
                    var iframes = document.querySelectorAll(`.video-item[data-block_video="${popup_id}"] iframe`);
                    iframes.forEach((frame) => {
                        let interval = window.setInterval(trackClick, 100);
                        function trackClick() {
                            if(document.activeElement == frame) {
                                window.focus();
                            }
                        }
                    });
                    document.addEventListener('keydown', (event) => {
                        if(event.key == 'Escape'){
                            video_popup.classList.remove('open_lighbox')
                            video_popup.classList.add('hide');
                            document.querySelector('body').classList.remove("overflow-hidden");
                            //mp4
                            mp4VidepPlayPause(popup_id, false)
                            //Iframe
                            iframePlayPasue(popup_id, false)
                        }
                    });
                    video_popup.classList.add('open_lighbox')
                    video_popup.classList.remove('hide');
                    document.querySelector('body').classList.add("overflow-hidden");
                    //mp4
                    mp4VidepPlayPause(popup_id, true)
                    
                    //IFrame
                    iframePlayPasue(popup_id, true)
                }
                //close popup
                
                video_popup.querySelector('.close-menu').addEventListener("click", (e) => {
                    const isClosest = e.target.closest('.vide-container');
                    if (!isClosest) {
                        video_popup.classList.add('hide');
                        video_popup.classList.remove('open_lighbox');
                        document.querySelector('body').classList.remove("overflow-hidden");

                        //mp4
                        mp4VidepPlayPause(popup_id, false)
                        //Iframe
                        iframePlayPasue(popup_id, false)
                       
                        
                    }
                });
            })

            
        })
    })


    function mp4VidepPlayPause(popupId, play) {
        
        var screenWidth = window.innerWidth;
        // console.log('video mp4')
        var mp4videos = document.querySelectorAll(`.video-item[data-block_video="${popupId}"] .desk__video, video-item[data-block_video="${popupId}"] .tab__video, video-item[data-block_video="${popupId}"] .mobile__video`);
        if(play == true){
            mp4videos.forEach((video) => {
                var videoClasses = video.classList; // Extracting the size class from the video
                // console.log(videoClasses)
                if (screenWidth <= 460 && videoClasses.contains('mobile__video')) {
                  video.play();
                } else if (screenWidth > 460 && screenWidth <= 768 && videoClasses.contains('tab__video')) {
                  video.play();
                } else if (screenWidth > 768 && videoClasses.contains('desk__video')) {
                  video.play();
                }
            }); 
        } else {
            mp4videos.forEach((video) => {
                var videoClasses = video.classList; // Extracting the size class from the video
                // console.log(videoClasses)
                if (screenWidth <= 460 && videoClasses.contains('mobile__video')) {
                  video.pause();
                } else if (screenWidth > 460 && screenWidth <= 768 && videoClasses.contains('tab__video')) {
                  video.pause();
                } else if (screenWidth > 768 && videoClasses.contains('desk__video')) {
                  video.pause();
                }
            }); 
        }
    }
    function iframePlayPasue(popupId, play) {
        var screenWidth = window.innerWidth;
        var iframes = document.querySelectorAll(`.video-item[data-block_video="${popupId}"] iframe`);
        // console.log(iframes,'iframe')
        if(play == true){
            iframes.forEach((iframe) => {
                var ifameClasses = iframe.classList; // Extracting the size class from the iframe
                if (screenWidth <= 460 && ifameClasses.contains('mobile__iframe')) {
                    playIframe(iframe);
                } else if (screenWidth > 460 && screenWidth <= 768 && ifameClasses.contains('tab__iframe')) {
                    playIframe(iframe);
                } else if (screenWidth > 768 && ifameClasses.contains('desk__iframe')) {
                    playIframe(iframe);
                }
            }); 
        } else {
            iframes.forEach((iframe) => {
                var ifameClasses = iframe.classList; // Extracting the size class from the iframe
                if (screenWidth <= 460 && ifameClasses.contains('mobile__iframe')) {
                    pauseIframe(iframe);
                } else if (screenWidth > 460 && screenWidth <= 768 && ifameClasses.contains('tab__iframe')) {
                    pauseIframe(iframe);
                } else if (screenWidth > 768 && ifameClasses.contains('desk__iframe')) {
                    pauseIframe(iframe);
                }
            });
        }
    }
    function pauseIframe(iframe) {
        var player = new Vimeo.Player(iframe);
        player.pause()
    }
    function playIframe(iframe) {
        var player = new Vimeo.Player(iframe);
        // console.log(player)
        player.play()
    }

    var iframes = document.querySelectorAll(`.video-item iframe`);
    iframes.forEach((iframe) => { 
        var player = new Vimeo.Player(iframe);
        player.pause()
    })