const audioPlayers = document.querySelectorAll('.audio-player');

audioPlayers.forEach((player) => {
  const audio = player.querySelector('audio');
  const playPauseBtn = player.querySelector('.play');
  const progressBar = player.querySelector('.progress-bar');
  const timeLeft = player.querySelector('.time-left');

  playPauseBtn.addEventListener('click', () => {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  });

  

  audio.addEventListener('timeupdate', () => {
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progress = (currentTime / duration) * 100;
    const minutesElapsed = Math.floor(currentTime / 60);
    const secondsElapsed = Math.floor(currentTime % 60);
    progressBar.style.width = `${progress}%`;
    timeLeft.textContent = `${formatTime(minutesElapsed)}:${formatTime(secondsElapsed)}`;
  });
});

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
