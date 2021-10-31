document.addEventListener('DOMContentLoaded', function() {
  const playback = document.querySelectorAll('.playback');
  let song = document.querySelectorAll('.song');
  let icon = document.querySelectorAll('.fa-play');
  const range = document.querySelectorAll('.volume');
  const audio = document.querySelectorAll('audio');
  
  for(let v = 0; v < playback.length; v++) {
    function playsong() {
      icon[v].classList.remove('fa-play');
      icon[v].classList.add('fa-pause');
      song[v].play();
    };
  
    function pausesong() {
      icon[v].classList.add('fa-play');
      icon[v].classList.remove('fa-pause');
      song[v].pause();
    };
  
    playback[v].addEventListener('click', () => {
      playback[v].classList.toggle('play');
      const playing = playback[v].classList.contains('play');
      if(playing) {
        playsong();
      } else {
        pausesong();
      }
    });
  
    audio[v].volume = range[v].value;
  
    range[v].addEventListener('input', event => {
      audio[v].volume = range[v].value;
    });
  };
});