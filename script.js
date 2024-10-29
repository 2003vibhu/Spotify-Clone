console.log("Welcome to spotify");

// initialize your varibles
let songIndex = 0;
let audioElement = new Audio('Songs/first.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');

// let songItem = document.getElementById('songItem');


// Make Array of objects 
let songs = [
    { songName: "Mashoor Rap Song-Zb Rai", filepath: "Songs/1.mp3", coverPath: "Songs/1.jpg" },
    { songName: "Party Music", filepath: "Songs/2.mp3", coverPath: "Songs/2.jpg" },
    { songName: "Abhi toh party shuru hui hai", filepath: "Songs/3.mp3", coverPath: "Songs/3.jpg" },
    { songName: "Chaar Bottle Vodka", filepath: "Songs/4.mp3", coverPath: "Songs/4.jpg" },
    { songName: "Party-2 Song", filepath: "Songs/5.mp3", coverPath: "Songs/5.jpg" },
    { songName: "bg Music", filepath: "Songs/6.mp3", coverPath: "Songs/6.jpg" },
    { songName: "Abhi toh party shuru hui hai", filepath: "Songs/7.mp3", coverPath: "Songs/7.jpg" },
    { songName: "Abhi toh party shuru hui hai", filepath: "Songs/8.mp3", coverPath: "Songs/8.jpg" },
    { songName: "bg", filepath: "Songs/9.mp3", coverPath: "Songs/9.jpg" },
    { songName: "bg Music", filepath: "Songs10/.mp3", coverPath: "Songs/10.jpg" },

    // { songName: "Mashoor Rap Song-Zb Rai", filepath: "first.mp3.mp3", coverPath: "1.jpg" },
    // { songName: "Party Music", filepath: "spotify1.mp3", coverPath: "2.jpg" },
    // { songName: "Abhi toh party shuru hui hai", filepath: "spotify2.mp3", coverPath: "3.jpg" },
    // { songName: "Chaar Bottle Vodka", filepath: "spotify3.mp3", coverPath: "4.jpg" },
    // { songName: "Party-2 Song", filepath: "spotify4.mp3", coverPath: "5.jpg" },
    // { songName: "bg Music", filepath: "8.mp3", coverPath: "6.jpg" },
    // { songName: "Abhi toh party shuru hui hai", filepath: "spotify5.mp3", coverPath: "7.jpg" },
    // { songName: "Abhi toh party shuru hui hai", filepath: "spotify6.mp3", coverPath: "8.jpg" },
    // { songName: "bg", filepath: "6.mp3", coverPath: "9.jpg" },
    // { songName: "bg Music", filepath: "7.mp3", coverPath: "10.jpg" },

]

songItem.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});

// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        // Change the play logo into pause

        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})

// listen to events
// ye audio ka event progress bar ka nhii (see on console):
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');

    // update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    // Progress set ho jayegii--->ishke baad myprogressbar ki initial progress ki value ko zero kar denge.
    myProgressBar.value = progress;

})

// seek bar pe click karke aage peeche kaise karen 
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// Banner Play Music Works

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');

    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `Songs/${songIndex + 1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        gif.style.opacity = 1;
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');

    })
})

// "e" means jis par click hua.
//e.target se woh element milega jis par click hua hai.

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1

    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex -= 1

    }
    audioElement.src = `Songs/${songIndex + 1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.play();
        audioElement.currentTime = 0;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

