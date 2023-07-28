let vid = document.getElementById("myVideo");
vid.playbackRate = 2;


window.addEventListener("DOMContentLoaded", function () {
    // Check if the user is on a mobile device
    const isMobileDevice = /Mobi/i.test(navigator.userAgent);
  
    // Get the video element and the video source element
    const videoElement = document.getElementById("myVideo");
    const videoSourceElement = document.getElementById("videoSource");
  
    // Set the appropriate video source based on the device
    if (isMobileDevice) {
      videoSourceElement.setAttribute("src", "video1.mp4");
    }
  
    // Load the new video source
    videoElement.load();
  });
  

// JavaScript code to change the text content on mobile view
window.onload = function() {
    var viewportWidth = window.innerWidth || document.documentElement.clientWidth;
    if (viewportWidth < 785) {
      document.getElementById("wel").innerHTML = "Trips Tailor Made for You";
    }
  }
  

  document.getElementById('btn1').addEventListener('click', function() {
    var scaleValue = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2)) / 100;
    document.getElementById('expandingBackground').style.transform = 'scale(' + scaleValue + ')';
  
    setTimeout(function() {
      window.location.href = 'form_filling/input.html'; // replace with the URL of your next page
    }, 2000); // match this with the transition duration
  });
  
  
