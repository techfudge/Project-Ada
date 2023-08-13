document.addEventListener('DOMContentLoaded', function() {
    const videoPlayer = document.getElementById('videoPlayer');
    const videoSources = [
        'cg23.mp4',
        'cg233.mp4',
        // Add more video sources as needed
    ];
    let currentVideoIndex = 0;

    videoPlayer.addEventListener('ended', playNextVideo);

    function playNextVideo() {
        currentVideoIndex++;
        if (currentVideoIndex >= videoSources.length) {
            currentVideoIndex = 0;
        }
        videoPlayer.src = videoSources[currentVideoIndex];
        videoPlayer.play();
    }

    // Start playing the first video
    videoPlayer.src = videoSources[currentVideoIndex];
    videoPlayer.play();
});
