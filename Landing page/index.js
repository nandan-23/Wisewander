document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    video.playbackRate = 2.2;
  });
  

  const tryNow = document.querySelector('#tryNowBtn');

  function clicked() {
    window.location.href = 'https://youtu.be/dQw4w9WgXcQ';
  }
  
  tryNow.addEventListener('click', clicked);
  