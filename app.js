let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar = document.querySelector('.seek-bar');
const songName = document.querySelector('.music-name');
const artisName = document.querySelector('.artist-name');
const disk = document.querySelector('.disk');
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration')
const playBtn = document.querySelector('.play-btn')
const ForwardBtn = document.querySelector('.forward-btn')
const backwardBtn = document.querySelector('.backward-btn')

playBtn.addEventListener('click', () => {
    playBtn.classList.toggle('pause');
    disk.classList.toggle('play');
})


// setup music

function setMusic(i) {
    seekBar.value = 0; // set range slide value to 0
    let song = songs[i];
    currentMusic = i;
    music.src = song.Path;

    songName.innerHTML = song.name;
    artisName.innerHTML = song.artist;
    disk.style.backgroundImage = `url`('${song.cover}');

    currentTime.innerHTML = '00:00';
    setTimeout(()=> {
        seekBar.max = music.Duration;
        console.log(music.Duration)
    }, 300);

    setMusic (0);
    }
        



// format time in min and second format

function formatTime(time) {
    let min = Math.floor(time / 60);
    if (min < 10) {
        min = `0${min}`;
    }
    let sec = Math.floor(time % 60);
    if (sec < 10) {

        sec = `0${sec}`;
    }
    return `${min} : ${sec}`;

}

