const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const audio = document.getElementById('audio');
const songs = ['Lofi', 'City Light', 'Incoming'];
let songIndex = 2;
loadSong(songs[songIndex]);
function loadSong(song) {
  audio.src = `../audio/${song}.mp3`;
}
function playSong() {
    musicContainer.classList.add('play');
    audio.play();
}
function pauseSong() {
    musicContainer.classList.remove('play');
    audio.pause();
}
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
      songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
});
audio.addEventListener('ended', nextSong);