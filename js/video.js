var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	play = document.querySelector("#play");
    pause = document.querySelector("#pause");

	video.autoplay = false;
	video.loop = false;
	console.log('autoplay is set to ' + video.autoplay);
	console.log('loop is set to ' + video.loop);
});

slowDown = document.querySelector("#slower");
speedUp = document.querySelector("#faster");
skip = document.querySelector("#skip");
mute = document.querySelector("#mute");
volumeSlider = document.querySelector("#slider");
volumeDisplay = document.querySelector("#volume");
vintage = document.querySelector("#vintage");
original = document.querySelector("#orig");



play.addEventListener("click", function() {
 	console.log("Play Button clicked");
	video.play();
	volumeDisplay.innerHTML = volumeSlider.value + "%";
});

pause.addEventListener("click", function() {
	console.log("Pause Button clicked");
   	video.pause();
});

slowDown.addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
 	console.log(video.playbackRate);
});

speedUp.addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 1.11;
 	console.log(video.playbackRate);
});

skip.addEventListener("click", function() {
	if(video.currentTime + 10 > video.duration){
		video.currentTime = 0;
	}
	else{
		video.currentTime += 10;
	}
 	console.log(video.currentTime);
});

mute.addEventListener("click", function() {
	if(mute.innerHTML == "Mute"){
		video.muted = true;
		mute.innerHTML = "Unmute";
	}
	else{
		console.log("button does not say mute")
		video.muted = false;
		mute.innerHTML = "Mute";
	}
});

volumeSlider.addEventListener("input", function() {
	video.volume = (volumeSlider.value) / 100;
	volumeDisplay.innerHTML = volumeSlider.value + "%";
});

vintage.addEventListener("click", function(){
	video.classList.add("oldSchool");
});

original.addEventListener("click", function(){
	video.classList.remove("oldSchool");
});