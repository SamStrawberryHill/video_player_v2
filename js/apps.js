


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
//Volume On and Mute
//Volume On show volume button
//Mute show mute button

// Full Screen
	var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
	if (!fullScreenEnabled) {
		fullscreen.style.display = 'none';
	}
function handleFullscreen() {
	var isFullScreen = function() {
		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
	}
	if (isFullScreen()) {
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
	}
  else {
		if (videoContainer.requestFullscreen) video.requestFullscreen();
		else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
		else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
		else if (video.msRequestFullscreen) video.msRequestFullscreen();
	}
}
//Implement the playback progress control.
//A user should be able to click anywhere on the playback bar to jump to that part of the video.
//As the video plays the playback bar should fill in.
//As the video plays the current time should be displayed and updated e.g. 0:10 / 11:34.
//Use Javascript or CSS to hide and show the video player button on mouse hover states. Only the progress bar should remain.
//As the media playback time changes, sentences in the transcript should highlight.
//Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.
//You can use the captions.vtt file to see the times at which the words are spoken in the video.
