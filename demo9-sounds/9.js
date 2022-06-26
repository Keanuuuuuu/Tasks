var sounds = ['applause','boo','gasp','tada','victory','wrong']; 

function stopSong(){
    sounds.forEach(sound => {
        var mp3 = "sounds/"+sound+".mp3";
        var mp2 = new Audio(mp3);
        mp2.pause();
        mp2.currentTime = 0;
    })
}

sounds.forEach(sound => {
    var element = document.getElementById(sound);
    element.onclick = function(){
        stopSong();
        var mp3 = "sounds/"+sound+".mp3";
        var mp3 = new Audio(mp3);
        mp3.play(); //播放 mp3这个音频对象
    }
});