const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp')


//Functions
//1 - toggleVideo -play or Pause vide 
//If video is playing, then pause  
//If video is pause, then play
function toggleVideo() {
     if (video.paused) {
         video.play();
     } else {
         video.pause();
     }
};  

//2 - updateIcon -toggle between play and pause icons 
//If video is playing, then show pause icon  
//If video is pause, then show play icon 
function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fas fa-play fa-2x"></i>';
    } else {
        play.innerHTML = <i class="fas fa-pause fa-2x"></i>
    }
};


//3- updateprogress- update the position of the progress bar and timestamp  
function updateProgress() {
    // update slider
     progress.value = video.currentTime/video.duration*100;
     // update timestamp
     // Rounding down the minutes
     let minutes = Math.floor(video.currentTime/ 60);
     if (minutes < 10) {
         minutes = `0${minutes}`;
     }
     // Rounding down the second 
     let seconds =Math.floor(video.currentTime% 60);

     if (seconds < 10) {
        second = `0${second }`;
    }
     // Display Timestamp
     timestamp.imnerHTML = `${minutes}:${seconds}`
};
//4 - stopVideo - stop video playback and reset time to 0  
function stopVideo() {
     video.pause();
     video.currentTime = 0;
};

//5- setProgress - update video play time based on manual  change in progress bar 
function setProgress() {
video.currentTime = progress.value * video.duration / 100;
};   



//   Event Listeners
//  1 - video Element - click to play or pause video
video.addEventListener('click', toggleVideo);
//  2 - video Element - pause to toggle play icon to pause icon
video.addEventListener('pause', updateIcon);
//  3 - video Element - play to toggle pause icon back to play icon  
video.addEventListener('play', updateIcon);
//  4 - video Element - update progress bar and timestamp
video.addEventListener('timeupdate',updateProgress);
//  5 -   play Button - click to play or pause video
play.addEventListener('click', toggleVideo);
//  6 -   stop Button - click to reset video and pause video
stop.addEventListener('click', stopVideo); 
//  7 -   progress Bar -change position to change time of playback
progress.addEventListener('change' , setProgress); 



