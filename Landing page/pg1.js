// JavaScript code to change background image every 5 seconds

const backgroundImages = [
    'Runway1.jpg',
    'Runway2.jpg',
    'Runway3.jpg',
    'Runway4.jpg',
    'Runway5.jpg'
  ];
  
  let currentImageIndex = 0;
  
  function changeBackgroundImage() {
    const background = document.querySelector('.background-image');
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    background.style.backgroundImage = `url('${backgroundImages[currentImageIndex]}')`;
  }
  
  setInterval(changeBackgroundImage, 5000); // Change image every 5 seconds
  