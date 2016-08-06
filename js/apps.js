



$('#play, #pause').click(function() {
	playPauseVideo();
});
$('#button-fullscreen').click(function(){
	handleFullscreen();
});


// Function for play video and change button to pause
function playPauseVideo() {
   var video = document.getElementById('video');
   if (video.paused) {
      video.play();
			$('#play').css('display', 'none');
			$('#pause').css('display', 'inline-block');
   } else {
      video.pause();
			$('#pause').css('display', 'none');
			$('#play').css('display', 'inline-block');
   }
 }
 // Full Screen
 var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
 if (!fullScreenEnabled) {
    fullscreen.style.display = 'none';
 }
function handleFullscreen() {
		var fullscreen = document.getElementById('button-fullscreen').addEventListener('click',function() {
	handleFullscreen();
		var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}
	if (isFullScreen()) {
      if (document.exitFullscreen) document.exitFullscreen();
      else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
      else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
      else if (document.msExitFullscreen) document.msExitFullscreen();
      setFullscreenData(false);
   }
   else {
      if (videoContainer.requestFullscreen) videoContainer.requestFullscreen();
      else if (videoContainer.mozRequestFullScreen) videoContainer.mozRequestFullScreen();
      else if (videoContainer.webkitRequestFullScreen) videoContainer.webkitRequestFullScreen();
      else if (videoContainer.msRequestFullscreen) videoContainer.msRequestFullscreen();
      setFullscreenData(true);
   }
	 var isFullScreen = function() {
   return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
		}
});
}
