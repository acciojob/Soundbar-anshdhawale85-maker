//your JS code here. If required.
const applauseAudio = document.getElementById("sound-applause");
const booAudio = document.getElementById("sound-boo");
const gaspAudio = document.getElementById("sound-gasp");
const tadaAudio = document.getElementById("sound-tada");
const victoryAudio = document.getElementById("sound-victory");
const wrongAudio = document.getElementById("sound-wrong");

function stopallsound() {
    applauseAudio.pause();      applauseAudio.currentTime = 0;
    booAudio.pause();           booAudio.currentTime = 0;
    gaspAudio.pause();          gaspAudio.currentTime = 0;
    tadaAudio.pause();          tadaAudio.currentTime = 0;
    victoryAudio.pause();       victoryAudio.currentTime = 0;
    wrongAudio.pause();         wrongAudio.currentTime = 0;
}

const applauseBtn = document.getElementById("btn-applause");
const booBtn = document.getElementById("btn-boo");
const gaspBtn = document.getElementById("btn-gasp");
const tadaBtn = document.getElementById("btn-tada");
const victoryBtn = document.getElementById("btn-victory");
const wrongBtn = document.getElementById("btn-wrong");
const stopBtn = document.getElementById("btn-stop");

applauseBtn.addEventListener("click", function() {
    stopAllSounds();        
    applauseAudio.play();   
});

booBtn.addEventListener("click", function() {
    stopAllSounds();
    booAudio.play();
});

gaspBtn.addEventListener("click", function() {
    stopAllSounds();
    gaspAudio.play();
});

tadaBtn.addEventListener("click", function() {
    stopAllSounds();
    tadaAudio.play();
});

victoryBtn.addEventListener("click", function() {
    stopAllSounds();
    victoryAudio.play();
});

wrongBtn.addEventListener("click", function() {
    stopAllSounds();
    wrongAudio.play();
});

stopBtn.addEventListener("click", function() {
    stopAllSounds();
});


