document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("myVideo");
    video.playbackRate = 2.2;
  });
  

  const tryNow = document.querySelector('#tryNowBtn');

  function clicked() {
    window.location.href = 'https://www.youtube.com';
  }
  
  tryNow.addEventListener('click', clicked);
  