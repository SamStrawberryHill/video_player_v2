
//Event Handling
var video = document.getElementById('video');

$('#play, #pause').click(function() {
	playPauseVideo();
});
$('#videoContainer').mouseenter(function(){
	$('#video-controls').show();
	$('#text-transcript').css('padding-top', 100);
});
$('#videoContainer').mouseleave(function(){
	if (!video.paused){
		$('#video-controls').hide();
		$('#text-transcript').css('padding-top', 0);
	}
});

$('#button-fullscreen').click(function(){
	handleFullscreen();
});
document.getElementById('volumeOn').addEventListener('click', function() {
	muteVideo();
});
document.getElementById('volumeOff').addEventListener('click', function() {
	muteVideo();
});

// Function for play video and change button to pause
function playPauseVideo() {
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
function muteVideo() {
	video.muted = !video.muted;
	if (video.muted) {
		$('#volumeOn').css('display', 'none');
		$('#volumeOff').css('display', 'inline-block');
	}
	else {
		$('#volumeOff').css('display', 'none');
		$('#volumeOn').css('display', 'inline-block');
	}
}

// Full Screen
var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen);
if (!fullScreenEnabled) {
	document.getElementById('fullscreen').style.display = 'none';
}
function handleFullscreen() {
	var isFullScreen = function() {
		return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
	};
	if (isFullScreen()) {
		if (document.exitFullscreen) document.exitFullscreen();
		else if (document.mozCancelFullScreen) document.mozCancelFullScreen();
		else if (document.webkitCancelFullScreen) document.webkitCancelFullScreen();
		else if (document.msExitFullscreen) document.msExitFullscreen();
	} else {
		if (document.getElementById('videoContainer').requestFullscreen) video.requestFullscreen();
		else if (video.mozRequestFullScreen) video.mozRequestFullScreen();
		else if (video.webkitRequestFullScreen) video.webkitRequestFullScreen();
		else if (video.msRequestFullscreen) video.msRequestFullscreen();
	}
}
//Implement the playback progress control.
//As the video plays the playback bar should fill in.
var pBar = document.getElementById('progressBar');

video.addEventListener('timeupdate', function() {
	var percent = Math.floor((100 / video.duration) * video.currentTime);
	pBar.value = percent;
	pBar.getElementsByTagName('span')[0].innerHTML = percent;
}, false);

video.addEventListener('loadedmetadata', function() {
	duration();
//Update Video Duration Text with video duration
document.getElementById("time-duration").innerHTML = duration();
});

//Event listener for end of video to set back to start
video.addEventListener("timeupdate", function(event) {
if (video.currentTime == video.duration) {
	video.pause();
	video.currentTime = 0;
	}
});

//A user should be able to click anywhere on the playback bar to jump to that part of the video
pBar.addEventListener("click", function(event) {
	var barClick = event.offsetX / this.offsetWidth;
	video.currentTime = barClick * video.duration;
	pBar.value = barClick / 100;
});

//As the video plays the current time should be displayed and updated
function currentTime() {
	var video = document.getElementById("video");
	var minutes = parseInt(video.currentTime / 60, 10);
	var seconds = parseInt(video.currentTime % 60, 10);
	if (seconds < 10) {
		seconds = "0" + parseInt(video.currentTime % 60, 10);
	}
	return minutes + ":" + seconds;
}

//Update Video Timer Text with current time
video.ontimeupdate = function() {
	document.getElementById("time-current").innerHTML = currentTime();
};

//Get Video Duration in min/sec
function duration() {
	var video = document.getElementById("video");
	var minutes = parseInt(video.duration / 60, 10);
	var seconds = parseInt(video.duration % 60);
	return minutes + ":" + seconds;
}
//Use Javascript or CSS to hide and show the video player button on mouse hover states. Only the progress bar should remain.

//Transcript
var textTranscript = document.getElementById("text-transcript");

var syncTranscript = [
	{"start": "0.01","end": "7.535","text": "Now that we've looked at the architecture of the internet, let's see how you might connect your personal devices to the internet inside your house."},
	{"start": "7.536","end": "13.960","text": "Well there are many ways to connect to the internet, and most often people connect wirelessly."},
	{"start": "13.961","end": "17.940","text": "Let's look at an example of how you can connect to the internet."},
	{"start": "17.941","end": "30.920","text": "If you live in a city or a town, you probably have a coaxial cable for cable Internet, or a phone line if you have DSL, running to the outside of your house, that connects you to the Internet Service Provider, or ISP."},
	{"start": "32.100","end": "41.190","text": "If you live far out in the country, you'll more likely have a dish outside your house, connecting you wirelessly to your closest ISP, or you might also use the telephone system."},
	{"start": "42.350","end": "53.760","text": "Whether a wire comes straight from the ISP hookup outside your house, or it travels over radio waves from your roof, the first stop a wire will make once inside your house, is at your modem."},
	{"start": "53.761","end": "57.780","text": "A modem is what connects the internet to your network at home."},
	{"start": "57.781","end": "59.000","text": "A few common residential modems are DSL or..."}
];

createTranscript();

function createTranscript() {
	var element;
	for (var i = 0; i < syncTranscript.length; i++) {
		element = document.createElement('span');
		element.cue = syncTranscript[i];
		element.innerText = syncTranscript[i].text + " ";
		textTranscript.appendChild(element);
	}
}
//As the media playback time changes, sentences in the transcript should highlight.
//Use JavaScript to listen for those changes and apply a highlight to the appropriate sentence.
// function highlightText
video.addEventListener("timeupdate", function(e) {
	syncTranscript.forEach(function(element, index, array){
		if( video.currentTime >= element.start && video.currentTime <= element.end ){
			textTranscript.children[index].classList.add("active-cue");
		}
		if (video.currentTime < element.start || video.currentTime > element.end) {
			textTranscript.children[index].classList.remove("active-cue");
		}
	});
});
