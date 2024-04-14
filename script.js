var lastPlayedAudio = null;

document.getElementById("button1").addEventListener("click", function() {
    var audio1 = document.getElementById("audio1");
    var audio1_5 = document.getElementById("audio1.5");
    
    if (lastPlayedAudio === audio1) {
        audio1_5.play();
        lastPlayedAudio = audio1_5;
    } else {
        audio1.play();
        lastPlayedAudio = audio1;
    }
});

document.getElementById("button2").addEventListener("click", function() {
    var audio2 = document.getElementById("audio2");
    var audio2_5 = document.getElementById("audio2.5");
    
    if (lastPlayedAudio === audio2) {
        audio2_5.play();
        lastPlayedAudio = audio2_5;
    } else {
        audio2.play();
        lastPlayedAudio = audio2;
    }
});