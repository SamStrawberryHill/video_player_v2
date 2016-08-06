$('#play, #pause').click(function() {
	playPauseVideo();
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
