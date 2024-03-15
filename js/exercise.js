let videoPreview = document.getElementById('video');
let videoPauseButton = document.getElementById('pause-button');
let videoPlayButton = document.getElementById('play-button');

videoPauseButton.addEventListener('click', () => {
    videoPreview.pause();
    videoPlayButton.style.display = "revert";
    videoPlayButton.style.pointerEvents = "all";
    videoPauseButton.style.display = "none";
    videoPauseButton.style.pointerEvents = "none";
    
});
videoPlayButton.addEventListener('click', () => {
    videoPreview.play();
    videoPauseButton.style.display = "revert";
    videoPauseButton.style.pointerEvents = "all";
    videoPlayButton.style.display = "none";
    videoPlayButton.style.pointerEvents = "none";
});
